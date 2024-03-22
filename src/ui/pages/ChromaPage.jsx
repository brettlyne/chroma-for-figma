import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import chroma from "chroma-js";
import generateSteps from "../utils/generateSteps";

import Icon from "../components/Icon";
import SegmentedButton from "../components/SegmentedButton";
import Checkbox from "../components/Checkbox";
import ColorInputList from "../components/ColorInputList";
import PaletteResults from "../components/PaletteResults/PaletteResults";

const ChromaPage = ({ goBack, toast, initialState }) => {
  const [mode, setMode] = useState(initialState.mode);
  const [numColors, setNumColors] = useState(initialState.numColors);
  const [colors1, setColors1] = useState(initialState.colors1);
  const [colors2, setColors2] = useState(initialState.colors2);
  const [correctLightness, setCorrectLightness] = useState(
    initialState.correctLightness
  );
  const [bezier, setBezier] = useState(initialState.bezier);

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

  onmessage = (event) => {
    const message = JSON.parse(event.data.pluginMessage);
    if (message.type === "set-color-by-id") {
      const { id, color } = message;
      const hexColor = chroma([
        color.r * 255,
        color.g * 255,
        color.b * 255,
      ]).hex();
      const colorSet = colors1.some((c) => c.id === id) ? 1 : 2;
      const newColors = (colorSet === 1 ? colors1 : colors2).map((c) => {
        if (c.id === id) {
          return { ...c, color: hexColor };
        }
        return c;
      });
      colorSet === 1 ? setColors1(newColors) : setColors2(newColors);
    }
  };

  const steps = generateSteps(
    colors1,
    colors2,
    numColors,
    mode,
    correctLightness,
    bezier
  );

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
          checked={bezier}
          onChange={(e) => setBezier(e.target.checked)}
        />
      </p>
      <div className="space12" />

      <PaletteResults
        colors={steps}
        toast={toast}
        settings={{
          mode,
          numColors,
          colors1,
          colors2,
          correctLightness,
          bezier,
        }}
      />

      <div className="space20" />
      <div className="space20" />
    </>
  );
};

export default ChromaPage;
