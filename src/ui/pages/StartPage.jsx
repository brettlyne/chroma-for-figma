import React, { useState } from "react";
import ReactDOM from "react-dom";

import PalettePreview from "../components/PalettePreview";

const colors = [
  "#174498",
  "#4768A9",
  "#6B8FBB",
  "#8FB6CC",
  "#BADEDB",
  "#FFFFE3",
];

const StartPage = ({ loadPalette }) => {
  return (
    <>
      <div className="space20" />
      <h1>Chroma.js data vis color palette helper</h1>
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
          {[0, 1, 2, 3].map((i) => (
            <>
              <PalettePreview key={i} colors={colors} />
            </>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <p>Diverging</p>
          <div className="space8" />
          {[0, 1, 2, 3].map((i) => (
            <>
              <PalettePreview key={i} colors={colors} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default StartPage;
