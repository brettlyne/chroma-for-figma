import React from "react";
import copy from "copy-to-clipboard";
import chroma from "chroma-js";

import Icon from "../Icon";

interface PaletteResultsListProps {
  colors: string[];
  toast: (toastString: string[]) => void;
}

const PaletteResultsList: React.FC<PaletteResultsListProps> = ({
  colors,
  toast,
}) => {
  const copyToClipboard = (color) => {
    copy(color);
    toast(`${color} copied to clipboard`);
  };

  const setFill = (color) => {
    const [r, g, b] = chroma(color).rgb();
    parent.postMessage(
      {
        pluginMessage: {
          type: "set-fill",
          color: { r: r / 255, g: g / 255, b: b / 255 },
        },
      },
      "*"
    );
  };

  return (
    <div className="color-results-list">
      {colors.map((color, index) => (
        <div className="color-result-item color-input" key={index}>
          <div
            className="color-result-swatch"
            style={{ backgroundColor: color }}
          />

          <input
            type="text"
            value={color}
            readonly
            style={{ width: "80px" }}
            onFocus={(e) => e.target.select()}
          />

          <button
            className="icon-button"
            onClick={() => copyToClipboard(color)}
          >
            <Icon icon="copy" />
          </button>

          <button className="icon-button" onClick={() => setFill(color)}>
            <Icon icon="paint_bucket" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PaletteResultsList;
