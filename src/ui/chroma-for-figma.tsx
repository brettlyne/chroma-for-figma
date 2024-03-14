import React, { useState } from "react";
import ReactDOM from "react-dom";

import SegmentedButton from "./components/SegmentedButton";
import "./index.css";

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

  return (
    <>
      <h1>Chroma.js data vis color palette helper</h1>
      <p>Hello world.</p>
      <pre>
        <code>this is some code #0012345667879</code>
      </pre>
      <p>
        Test:
        <SegmentedButton options={["one", "two", "three"]} />
      </p>
      <p>
        Test:
        <SegmentedButton options={["sequential", "diverging"]} />
      </p>
      <p>
        Number of colors:
        <input style={{ width: "60px" }} type="number" min="1" max="100" />
      </p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
