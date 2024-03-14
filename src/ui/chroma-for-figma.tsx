import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

import SegmentedButton from "./components/SegmentedButton";
import Checkbox from "./components/Checkbox";
import Icon from "./components/Icon";

const App = () => {
  const [iconColor, setIconColor] = useState("rebeccapurple");

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
      <p>Chroma.js data vis color palette helper </p>
      <h1>UI Component testing</h1>

      <hr />

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

      <hr />

      <p>
        Number of colors:
        <input style={{ width: "60px" }} type="number" min="1" max="100" />
      </p>

      <hr />

      <p>
        this is a button:
        <button className="button">test button</button>
      </p>

      <hr />

      <p>
        <Checkbox label="AbCdEfGhIjKLmnoPQRstuVW" />
      </p>

      <hr />

      <p>
        Icons, color:{" "}
        <SegmentedButton
          options={["rebeccapurple", "green", "coral"]}
          onChange={(e) => setIconColor(e)}
        />
      </p>
      <p style={{ color: iconColor }}>
        <Icon icon="eyedropper" />
        <Icon icon="add" />
        <Icon icon="drag_handle" />
        <Icon icon="copy" />
        <Icon icon="paint_bucket" />
      </p>

      <hr />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
