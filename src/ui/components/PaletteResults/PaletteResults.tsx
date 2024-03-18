import React from "react";

import PaletteResultsList from "./PaletteResultsList";

interface PaletteResultsProps {
  colors: string[];
  toast: (toastString: string) => void;
}

const PaletteResults: React.FC<PaletteResultsProps> = ({ colors, toast }) => {
  return (
    <div className="palette-results">
      <p style={{ fontWeight: 600 }}>Resulting Palette:</p>
      <div className="space4" />
      <div style={{ display: "flex", height: "34px" }}>
        {colors.map((color, index) => (
          <div key={index} style={{ flex: 1, backgroundColor: color }} />
        ))}
      </div>
      <div className="space8" />
      <p>
        Export as <button className="text">swatches</button> |{" "}
        <button className="text">styles or variables</button> |{" "}
        <button className="text">hex codes</button>
      </p>
      <div className="space12" />
      <PaletteResultsList colors={colors} toast={toast} />
    </div>
  );
};

export default PaletteResults;
