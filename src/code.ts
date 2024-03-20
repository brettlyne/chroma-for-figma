figma.showUI(__html__, { width: 370, height: 666 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
  if (msg.type === "set-fill") {
    const color = msg.color;
    const nodes = figma.currentPage.selection;
    nodes.forEach((node) => {
      if ("fills" in node) {
        node.fills = [{ type: "SOLID", color }];
      }
    });
  }

  if (msg.type === "get-fill") {
    const nodes = figma.currentPage.selection;
    const selection = figma.currentPage.selection?.[0];

    if (
      !selection ||
      !("fills" in selection) ||
      !Array.isArray(selection.fills) ||
      !selection.fills[0]?.color
    ) {
      figma.notify("Select a layer with a solid fill to sample the color.");
      return;
    }

    if ("fills" in selection && selection.fills?.[0]?.type === "SOLID") {
      figma.ui.postMessage(
        JSON.stringify({
          msgType: "set-fill",
          color: selection.fills[0].color,
        })
      );
    }
  }

  if (msg.type === "eye-dropper") {
    const id = msg.id;
    const nodes = figma.currentPage.selection;
    if (nodes.length === 0) {
      figma.notify("Select a layer with a solid fill to sample the color.");
      return;
    }
    const selected = nodes[0];

    if (
      !selected ||
      !("fills" in selected) ||
      !Array.isArray(selected.fills) ||
      !selected.fills[0]?.color
    ) {
      figma.notify("Select a layer with a solid fill to sample the color.");
      return;
    }
    const color = selected?.fills?.[0].color;

    figma.ui.postMessage(
      JSON.stringify({
        msgType: "set-color-by-id",
        id,
        color: selected.fills[0].color,
      })
    );
  }

  if (msg.type === "create-swatches") {
    const colors = msg.colors;
    const swatchSize = 100;
    for (const [index, color] of colors.entries()) {
      const rect = figma.createRectangle();
      console.log("rect.x", rect.x);
      rect.x = index * swatchSize;
      rect.y = 0;
      rect.resize(swatchSize, swatchSize);
      rect.fills = [{ type: "SOLID", color }];
      figma.currentPage.appendChild(rect);
    }
  }
};
