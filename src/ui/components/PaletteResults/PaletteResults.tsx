import React, { useState } from "react";
import chroma from "chroma-js";

import { colorBlindCheck } from "../../utils/colorBlind";

import ColorblindnessModal from "./ColorblindnessModal";
import ExportAsStylesModal from "./ExportAsStylesModal";
import HexCodesModal from "./HexCodesModal";
import PaletteResultsList from "./PaletteResultsList";
import Icon from "../Icon";

interface PaletteResultsProps {
  colors: string[];
  toast: (toastString: string) => void;
}

const PaletteResults: React.FC<PaletteResultsProps> = ({ colors, toast }) => {
  const [modalState, setModalState] = useState(false);

  const colorblindResults = colorBlindCheck(colors);

  const createSwatches = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-swatches",
          colors: colors.map((color) => {
            const [r, g, b] = chroma(color).rgb();
            return { r: r / 255, g: g / 255, b: b / 255 };
          }),
        },
      },
      "*"
    );
  };

  return (
    <>
      {modalState === "colorblind" ? (
        <ColorblindnessModal
          palette={colors}
          colorblindResults={colorblindResults}
          onClose={() => setModalState(false)}
        />
      ) : null}

      {modalState === "styles" ? (
        <ExportAsStylesModal
          palette={colors}
          onClose={() => setModalState(false)}
        />
      ) : null}

      {modalState === "hex" ? (
        <HexCodesModal
          palette={colors}
          onClose={() => setModalState(false)}
          toast={toast}
        />
      ) : null}

      <div className="palette-results">
        <div style={{ display: "flex" }}>
          <p style={{ fontWeight: 600 }}>Resulting Palette:</p>
          <button
            className={`text colorblind ${colorblindResults.length === 0 ? "" : "unsafe"}`}
            onClick={() => setModalState("colorblind")}
          >
            {colorblindResults.length === 0 ? (
              <>
                <Icon icon="small_check" />
                colorblind safe
              </>
            ) : (
              <>
                <Icon icon="small_x" />
                not colorblind safe
              </>
            )}
          </button>
        </div>
        <div className="space4" />
        <div style={{ display: "flex", height: "34px" }}>
          {colors.map((color, index) => (
            <div key={index} style={{ flex: 1, backgroundColor: color }} />
          ))}
        </div>
        <div className="space8" />
        <p>
          Export as{" "}
          <button onClick={createSwatches} className="text">
            swatches
          </button>{" "}
          |{" "}
          <button className="text" onClick={() => setModalState("styles")}>
            styles or variables
          </button>{" "}
          |{" "}
          <button className="text" onClick={() => setModalState("hex")}>
            hex codes
          </button>
        </p>
        <div className="space12" />
        <PaletteResultsList colors={colors} toast={toast} />
      </div>
    </>
  );
};

export default PaletteResults;
