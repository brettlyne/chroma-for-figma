import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import chroma from "chroma-js";
import useUndo from "use-undo";
import generateSteps from "../utils/generateSteps";

import Icon from "../components/Icon";
import SegmentedButton from "../components/SegmentedButton";
import Checkbox from "../components/Checkbox";
import ColorInputList from "../components/ColorInputList";
import PaletteResults from "../components/PaletteResults/PaletteResults";

const ChromaPage = ({ goBack, toast, initialState }) => {
  const [state, { set: setState, undo, redo }] = useUndo(initialState);
  const { mode, numColors, colors1, colors2, correctLightness, bezier } =
    state.present;

  // event listener for undo / redo
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [undo, redo]);

  // handle redo / undo on mac (metaKey) and pc (ctrlKey)
  const handleKeyDown = (evtobj) => {
    if ((evtobj.metaKey || evtobj.ctrlKey) && evtobj.keyCode === 90) {
      if (evtobj.shiftKey) {
        redo();
      } else {
        undo();
      }
    }
  };

  // setters for state
  const setMode = (value) => setState({ ...state.present, mode: value });
  const setNumColors = (value) =>
    setState({ ...state.present, numColors: value });
  const setColors1 = (value) => setState({ ...state.present, colors1: value });
  const setColors2 = (value) => setState({ ...state.present, colors2: value });
  const setCorrectLightness = (value) =>
    setState({ ...state.present, correctLightness: value });
  const setBezier = (value) => setState({ ...state.present, bezier: value });

  // drag and drop reordering for colors
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

  // will receive a message from Figma plugin when we use the eyedropper
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

  // "steps" are the colors that will be displayed in the palette
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
