import React from "react";

import presets from "../utils/presets";

import PalettePreview from "../components/PalettePreview";
import Icon from "../components/Icon";

// TODO: load actual palettes once I have the data (tool functions)
const colors = [
  "#174498",
  "#4768A9",
  "#6B8FBB",
  "#8FB6CC",
  "#BADEDB",
  "#FFFFE3",
];

const StartPage = ({ setPage, setInitialState }) => {
  const loadPalette = (preset) => {
    setInitialState(preset);
    setPage("chroma");
  };

  return (
    <>
      <div className="space20" />
      <a
        style={{ position: "absolute", top: "26px", right: "20px" }}
        href="https://github.com/brettlyne/chroma-for-figma"
        target="_blank"
      >
        <Icon icon="octocat" />
      </a>
      <h1>
        Chroma.js data vis <br />
        color palette helper
      </h1>
      <div className="space12" />
      <p>
        Multi-hued multi-stop color scales tool adapted for Figma from{` `}
        <a href="https://gka.github.io/palettes/">gka.github.io/palettes/</a> by
        Gregor Aisch.
      </p>
      <div className="space12" />
      <p>
        <strong>Choose a palette to start from.</strong>
      </p>
      <div className="space12" />

      <p>Recent</p>
      <div className="space8" />
      <div className="columns">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div style={{ flex: 1, minWidth: "120px" }}>
            <PalettePreview key={i} colors={colors} />
          </div>
        ))}
      </div>

      <div className="columns">
        <div style={{ flex: 1 }}>
          <p>Sequential</p>
          <div className="space8" />
          {presets.sequential.map((preset, i) => (
            <PalettePreview
              key={i}
              colors={preset.steps}
              onClick={() => loadPalette(preset)}
            />
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <p>Diverging</p>
          <div className="space8" />
          {presets.diverging.map((preset, i) => (
            <PalettePreview
              key={i}
              colors={preset.steps}
              onClick={() => loadPalette(preset)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StartPage;
