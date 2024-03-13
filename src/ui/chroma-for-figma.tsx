import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  onmessage = (event) => {
    const message = JSON.parse(event.data.pluginMessage);

    // doing this in UI bc d3 doesn't work in figma code environment
    // if (message.msgType === "calculate-tree-locations") {
    //   const { treeCount, width, height } = message;
    //   const locations = randomGrid(
    //     width,
    //     height,
    //     treeCount,
    //     10 - distributionRandomness
    //   );
    //   parent.postMessage(
    //     { pluginMessage: { type: "use-these-locations", locations } },
    //     "*"
    //   );
    // }
  };

  return <>Hello world.</>;
};

ReactDOM.render(<App />, document.getElementById("root"));
