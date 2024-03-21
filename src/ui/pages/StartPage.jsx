import React from "react";

import presets from "../utils/presets";

import PalettePreview from "../components/PalettePreview";
import Icon from "../components/Icon";

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

      <p>Sequential</p>
      <div className="space8" />
      <div className="columns">
        {presets.sequential.map((preset, i) => (
          <PalettePreview
            key={i}
            colors={preset.steps}
            onClick={() => loadPalette(preset)}
          />
        ))}
      </div>

      <p>Diverging</p>
      <div className="space8" />
      <div className="columns">
        {presets.diverging.map((preset, i) => (
          <PalettePreview
            key={i}
            colors={preset.steps}
            onClick={() => loadPalette(preset)}
          />
        ))}
      </div>
    </>
  );
};

export default StartPage;
