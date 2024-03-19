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
  console.log("msg", msg);

  if (msg.type === "set-fill") {
    const color = msg.color;
    console.log("color", color);

    const nodes = figma.currentPage.selection;
    nodes.forEach((node) => {
      if ("fills" in node) {
        node.fills = [{ type: "SOLID", color }];
      }
    });
  }

  if (msg.type === "add-trees") {
    const trees: Object = figma.currentPage.selection.reduce(
      (obj, item) => ({ ...obj, [item.id]: item.name }),
      {}
    );

    figma.ui.postMessage(
      JSON.stringify({
        msgType: "add-these-trees",
        trees: trees,
      })
    );
  }

  // figma.closePlugin();
};
