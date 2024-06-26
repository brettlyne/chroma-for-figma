figma.showUI(__html__, { width: 370, height: 666 });

// send initial selection "chroma" pluginData on launch
const selection = figma.currentPage.selection;
if (selection.length > 0 && selection[0].type === "FRAME") {
  const settings = selection[0].getPluginData("chroma");
  if (settings) {
    figma.ui.postMessage(
      JSON.stringify({
        type: "initial-selection",
        settings,
      })
    );
  }
}

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg) => {
  // sets the fill of the selected layers
  if (msg.type === "set-fill") {
    const color = msg.color;
    const nodes = figma.currentPage.selection;
    nodes.forEach((node) => {
      if ("fills" in node) {
        node.fills = [{ type: "SOLID", color }];
      }
    });
  }

  // get fill from selected layer and send to UI to apply to a specific id
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

    figma.ui.postMessage(
      JSON.stringify({
        type: "set-color-by-id",
        id,
        color: selected.fills[0].color,
      })
    );
  }

  if (msg.type === "create-swatches") {
    const { colors, settings } = msg;
    const swatchWidth = colors.length < 8 ? 60 : colors.length < 12 ? 40 : 30;
    const swatchHeight = 80;
    const offsetX = figma.viewport.center.x - (colors.length * swatchWidth) / 2;
    const offsetY = figma.viewport.center.y - swatchHeight / 2;

    const frame = figma.createFrame();
    frame.x = offsetX;
    frame.y = offsetY;
    frame.resize(Math.max(380, 40 + swatchWidth * colors.length), 234);
    frame.name = "Chroma Palette";
    frame.fills = [{ type: "SOLID", color: { r: 0.92, g: 0.92, b: 0.92 } }];

    const swatches = [];

    for (const [index, color] of colors.entries()) {
      const rect = figma.createRectangle();
      rect.x = 20 + index * swatchWidth;
      rect.y = 90;
      rect.resize(swatchWidth, swatchHeight);
      rect.fills = [{ type: "SOLID", color }];
      frame.appendChild(rect);
      swatches.push(rect);
    }

    figma.group(swatches, frame);

    const gradient = figma.createRectangle();
    gradient.x = 20;
    gradient.y = 174;
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
    frame.appendChild(gradient);
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    const font = { family: "Inter", style: "Light" };
    const description = figma.createText();
    description.fontName = font;
    description.lineHeight = { value: 20, unit: "PIXELS" };
    description.x = 20;
    description.y = 12;
    description.resize(340, 60);
    description.characters = `To edit this palette, launch the 
Chroma Data Vis Palettes plugin 
with this frame selected.`;
    description.setRangeHyperlink(34, 58, {
      type: "URL",
      value: "https://www.figma.com/community/plugin/1353117070534651153",
    });
    description.setRangeTextDecoration(34, 58, "UNDERLINE");
    frame.appendChild(description);

    frame.setRelaunchData({
      edit: "Edit with Chroma Data Vis Palettes plugin",
      data: JSON.stringify({ type: "edit palette", id: frame.id }),
    });
    console.log("settings", settings);
    frame.setPluginData("chroma", JSON.stringify(settings));
  }

  if (msg.type === "export") {
    const { prefix, palette, mode } = msg;
    if (mode === "styles") {
      const styles = await figma.getLocalPaintStylesAsync();

      for (let i = 0; i < palette.length; i++) {
        const color = palette[i];
        const name = `${prefix}${(i + 1).toString().padStart(2, "0")}`;
        // if style exists with name in styles, update it
        const existingStyle = styles.find((style) => style.name === name);
        if (existingStyle) {
          existingStyle.paints = [{ type: "SOLID", color }];
        }
        // otherwise create a new style
        else {
          const style = figma.createPaintStyle();
          style.name = name;
          style.paints = [{ type: "SOLID", color }];
        }
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
