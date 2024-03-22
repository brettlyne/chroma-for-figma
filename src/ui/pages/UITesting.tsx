//  you can import this script in index.html if you want to view these UI component tests

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";

import "../index.css";

import SegmentedButton from "../components/SegmentedButton";
import Checkbox from "../components/Checkbox";
import Icon from "../components/Icon";
import ColorInputList from "../components/ColorInputList";

const App = () => {
  const [segVal, setSegVal] = useState("one");
  const [iconColor, setIconColor] = useState("rebeccapurple");
  const [colors1, setColors1] = useState([
    { color: "#ff8800", id: "2" },
    { color: "#0088ff", id: "3" },
    { color: "#8800ff", id: "4" },
  ]);
  const [colors2, setColors2] = useState([
    { color: "#bbaa00", id: "5" },
    { color: "#ccdd22", id: "6" },
    { color: "#aaee44", id: "7" },
  ]);

  onmessage = (event) => {
    const message = JSON.parse(event.data.pluginMessage);
  };

  const handleDragEnd = (result: any) => {
    console.log(result);
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
        <SegmentedButton
          value={segVal}
          onChange={(v) => setSegVal(v)}
          options={["one", "two", "three"]}
        />
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
        <Icon icon="octocat" />
        <Icon icon="back_arrow" />
        <Icon icon="trash" />
        <Icon icon="small_check" />
        <Icon icon="small_x" />
      </p>

      <hr />

      <p>color input list</p>
      <DragDropContext onDragEnd={handleDragEnd}>
        <ColorInputList id="1" colors={colors1} setColors={setColors1} />
        <div className="spacer" style={{ height: "12px" }} />
        <ColorInputList id="2" colors={colors2} setColors={setColors2} />
      </DragDropContext>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
