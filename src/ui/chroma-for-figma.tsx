import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

import SegmentedButton from "./components/SegmentedButton";
import Checkbox from "./components/Checkbox";
import Icon from "./components/Icon";
import ColorInputItem from "./components/ColorInputItem";
import ColorInputList from "./components/ColorInputList";

const App = () => {
  const [iconColor, setIconColor] = useState("rebeccapurple");
  const [color, setColor] = useState("#ff8800");
  const [colors, setColors] = useState(["#ff8800", "#0088ff", "#8800ff"]);

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
    <div className="container">
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

      <p>color input row</p>
      <div>
        <ColorInputItem color={color} onChange={(c) => setColor(c)} />
      </div>
      <hr />

      <p>color input list</p>
      <ColorInputList colors={colors} onChange={(c) => setColors(c)} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
