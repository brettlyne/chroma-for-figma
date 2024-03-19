figma.showUI(__html__, { width: 370, height: 666 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
  // if (msg.type === "add-colors") {
  //   const colors: Object = figma.currentPage.selection.reduce(
  //     (obj, item) => ({ ...obj, [item.id]: item.fills[0].color }),
  //     {}
  //   );

  //   figma.ui.postMessage(
  //     JSON.stringify({
  //       msgType: "add-these-colors",
  //       colors: colors,
  //     })
  //   );
  // }
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
    for (const node of nodes) {
      if ("fills" in node) {
        figma.ui.postMessage(
          JSON.stringify({
            msgType: "set-fill-by-id",
            color: node.fills[0].color,
          })
        );
        return;
      }
    }
  }

  if (msg.type === "eye-dropper") {
    console.log(msg);
    const id = msg.id;
    const nodes = figma.currentPage.selection;
    if (nodes.length === 0) {
      figma.notify("Select a layer with a solid fill to sample the color.");
      return;
    }
    const selected = nodes[0];
    const color = selected?.fills?.[0].color;
    if (!color) {
      figma.notify("Select a layer with a solid fill to sample the color.");
      return;
    }
    figma.ui.postMessage(
      JSON.stringify({
        msgType: "set-color-by-id",
        id,
        color: selected.fills[0].color,
      })
    );
  }

  // figma.closePlugin();
};
