figma.showUI(__html__, { width: 370, height: 666 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
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

  figma.closePlugin();
};
