figma.showUI(__html__, { width: 370, height: 666 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg) => {
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
    const swatchWidth = 20;
    const swatchHeight = 80;
    const offsetX = figma.viewport.center.x - (colors.length * swatchWidth) / 2;
    const offsetY = figma.viewport.center.y - swatchHeight / 2;

    const swatches = [];

    for (const [index, color] of colors.entries()) {
      const rect = figma.createRectangle();
      rect.x = offsetX + index * swatchWidth;
      rect.y = offsetY;
      rect.resize(swatchWidth, swatchHeight);
      rect.fills = [{ type: "SOLID", color }];
      figma.currentPage.appendChild(rect);
      swatches.push(rect);
    }

    figma.group(swatches, figma.currentPage);

    const gradient = figma.createRectangle();
    gradient.x = offsetX;
    gradient.y = offsetY + swatchHeight + 4;
    gradient.resize(swatchWidth * colors.length, swatchHeight / 2);
    gradient.fills = [
      {
        type: "GRADIENT_LINEAR",
        gradientStops: colors.map(
          (color: { r: number; g: number; b: number }, index: number) => ({
            color: { ...color, a: 1 },
            position: index / (colors.length - 1),
          })
        ),
        gradientTransform: [
          [1, 0, 0],
          [0, 0, 0],
        ],
      },
    ];
    figma.currentPage.appendChild(gradient);
  }

  if (msg.type === "export") {
    const { prefix, palette, mode } = msg;
    if (mode === "styles") {
      for (let i = 0; i < palette.length; i++) {
        const color = palette[i];
        const style = figma.createPaintStyle();
        style.name = `${prefix}${(i + 1).toString().padStart(2, "0")}`;
        style.paints = [{ type: "SOLID", color }];
      }
      figma.notify(`Created ${palette.length} styles.`);
    }

    if (mode === "variables") {
      const collection =
        figma.variables.createVariableCollection("Chroma Palette");
      collection.renameMode(collection.modes[0].modeId, "default");
      for (let i = 0; i < palette.length; i++) {
        const color = palette[i];
        const name = `${prefix}${(i + 1).toString().padStart(2, "0")}`;
        const colorVariable = figma.variables.createVariable(
          name,
          collection,
          "COLOR"
        );
        colorVariable.setValueForMode(collection.modes[0].modeId, color);
      }
      figma.notify(
        `Created ${palette.length} variables in collection: "Chroma Palette"`
      );
    }
  }
};
