import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";
import chroma from "chroma-js";
import _range from "lodash.range";

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
  const [bezier, setBezier] = useState(false);

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
    if (message.msgType === "set-color-by-id") {
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

  // ================================================================
  // below code is from the original svelte component, see here for reference:
  // https://github.com/gka/palettes/blob/f91e5ab399c646482fca6e110c173b5ab31d14bf/src/PalettePreview.svelte
  // ================================================================

  const autoGradient = (color, numColors) => {
    const lab = chroma(color).lab();
    const lRange = 100 * (0.95 - 1 / numColors);
    const lStep = lRange / (numColors - 1);
    let lStart = (100 - lRange) * 0.5;
    const range = _range(lStart, lStart + numColors * lStep, lStep);
    let offset = 0;
    if (!diverging) {
      offset = 9999;
      for (let i = 0; i < numColors; i++) {
        let diff = lab[0] - range[i];
        if (Math.abs(diff) < Math.abs(offset)) {
          offset = diff;
        }
      }
    }
    return range.map((l) => chroma.lab([l + offset, lab[1], lab[2]]));
  };

  const autoColors = (color, numColors, reverse = false) => {
    if (diverging) {
      const colors = autoGradient(color, 3).concat(chroma("#f5f5f5"));
      if (reverse) colors.reverse();
      return colors;
    } else {
      return autoGradient(color, numColors);
    }
  };

  const colors = [colors1.map((c) => c.color), colors2.map((c) => c.color)];
  const even = numColors % 2 === 0;
  const diverging = mode === "diverging";
  const numColorsLeft = diverging
    ? Math.ceil(numColors / 2) + (even ? 1 : 0)
    : numColors;
  const numColorsRight = diverging
    ? Math.ceil(numColors / 2) + (even ? 1 : 0)
    : 0;
  const genColors =
    colors[0].length !== 1
      ? colors[0]
      : autoColors(colors[0][0], numColorsLeft);
  const genColors2 =
    colors[1].length !== 1
      ? colors[1]
      : autoColors(colors[1][0], numColorsRight, true);
  const stepsLeft = colors1.length
    ? chroma
        .scale(
          bezier && colors1.length > 1 ? chroma.bezier(genColors) : genColors
        )
        .correctLightness(correctLightness)
        .colors(numColorsLeft)
    : [];
  const stepsRight =
    diverging && colors2.length
      ? chroma
          .scale(
            bezier && colors2.length > 1
              ? chroma.bezier(genColors2)
              : genColors2
          )
          .correctLightness(correctLightness)
          .colors(numColorsRight)
      : [];
  const steps = (
    even && diverging ? stepsLeft.slice(0, stepsLeft.length - 1) : stepsLeft
  ).concat(stepsRight.slice(1));

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

      <PaletteResults colors={steps} toast={toast} />

      <div className="space20" />
      <div className="space20" />
    </>
  );
};

export default ChromaPage;
