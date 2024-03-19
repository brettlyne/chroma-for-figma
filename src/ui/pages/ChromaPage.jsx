import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";

import Icon from "../components/Icon";
import SegmentedButton from "../components/SegmentedButton";
import Checkbox from "../components/Checkbox";
import ColorInputItem from "../components/ColorInputItem";
import ColorInputList from "../components/ColorInputList";
import PaletteResults from "../components/PaletteResults/PaletteResults";

const ChromaPage = ({ goBack, toast }) => {
  const [mode, setMode] = useState("sequential");
  const [numColors, setNumColors] = useState(6);

  const [colors1, setColors1] = useState([
    { id: "1", color: "#FF0000" },
    { id: "2", color: "#00FF00" },
    { id: "3", color: "#0000FF" },
  ]);
  const [colors2, setColors2] = useState([
    { id: "4", color: "#FF0000" },
    { id: "5", color: "#00FF00" },
    { id: "6", color: "#0000FF" },
  ]);

  const [correctLightness, setCorrectLightness] = useState(false);
  const [bezierInterpolation, setBezierInterpolation] = useState(false);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const sourceId = result.source.droppableId;
    const destinationId = result.destination.droppableId;
    const source = sourceId === "1" ? colors1 : colors2;
    const destination = destinationId === "1" ? colors1 : colors2;
    const [removed] = source.splice(result.source.index, 1);
    destination.splice(result.destination.index, 0, removed);
    sourceId === "1" ? setColors1([...colors1]) : setColors2([...colors2]);
  };

  return (
    <>
      <div className="space8" />
      <p className="back-link" onClick={goBack}>
        <Icon icon="back_arrow" />
        <span>Back</span>
      </p>
      <h1>Chroma.js palette helper</h1>
      <div className="space16" />
      <p>
        Palette type:
        <SegmentedButton
          options={["sequential", "diverging"]}
          value={mode}
          onChange={(value) => setMode(value)}
        />
      </p>
      <div className="space12" />
      <p>
        Number of colors:{` `}
        <input
          style={{ width: "60px" }}
          type="number"
          min="1"
          max="100"
          value={numColors}
          onChange={(e) => setNumColors(e.target.value)}
        />
      </p>
      <div className="space12" />
      <p>
        <strong style={{ fontWeight: 600 }}>
          Input colors{mode === "diverging" ? " A:" : null}
        </strong>
        <div className="space4" />
        <DragDropContext onDragEnd={handleDragEnd}>
          <ColorInputList
            id="1"
            colors={colors1}
            setColors={setColors1}
            toast={toast}
          />
          {mode === "diverging" ? (
            <>
              <div className="space" style={{ height: "12px" }} />
              <strong style={{ fontWeight: 600 }}>Input colors B:</strong>
              <div className="space4" />
              <ColorInputList
                id="2"
                colors={colors2}
                setColors={setColors2}
                toast={toast}
              />
            </>
          ) : null}
        </DragDropContext>
      </p>
      <div className="space12" />

      <p>
        <Checkbox
          label="Correct lightness"
          checked={correctLightness}
          onChange={(e) => setCorrectLightness(e.target.checked)}
        />
      </p>
      <div className="space4" />

      <p>
        <Checkbox
          label="Bezier interpolation"
          checked={bezierInterpolation}
          onChange={(e) => setBezierInterpolation(e.target.checked)}
        />
      </p>
      <div className="space12" />

      <PaletteResults
        colors={["174498", "4768A9", "6B8FBB", "8FB6CC", "BADEDB", "FFFFE3"]}
        toast={toast}
      />

      <div className="space20" />
      <div className="space20" />
    </>
  );
};

export default ChromaPage;
