import React from "react";
import copy from "copy-to-clipboard";

import Icon from "../Icon";

interface PaletteResultsListProps {
  colors: string[];
  toast: (toastString: string[]) => void;
  onPaintBucket: () => void;
}

const PaletteResultsList: React.FC<PaletteResultsListProps> = ({
  colors,
  toast,
  onPaintBucket,
}) => {
  const copyToClipboard = (color) => {
    copy(color);
    toast(`${color} copied to clipboard`);
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
            value={"#" + color}
            readonly
            style={{ width: "80px" }}
            onFocus={(e) => e.target.select()}
          />

          <button onClick={() => copyToClipboard("#" + color)}>
            <Icon icon="copy" />
          </button>

          <button onClick={onPaintBucket}>
            <Icon icon="paint_bucket" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PaletteResultsList;
