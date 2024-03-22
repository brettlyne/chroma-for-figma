import React, { useState, useEffect } from "react";
import chroma from "chroma-js";

import Icon from "../../components/Icon";

const ExportAsStylesModal = ({ onClose, palette }) => {
  const [prefix, setPrefix] = useState("data-");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const exportColors = (mode) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "export",
          mode,
          prefix,
          palette: palette.map((color) => {
            const [r, g, b] = chroma(color).rgb();
            return { r: r / 255, g: g / 255, b: b / 255 };
          }),
        },
      },
      "*"
    );
  };

  return (
    <div className="modal">
      <Icon class="modal-close-btn" icon="close" onClick={onClose} />
      <div className="modal-content">
        <h2>Export as styles or variables</h2>
        <div className="space20" />
        <p>
          Name prefix:{` `}
          <input
            style={{ width: "" }}
            type="text"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
          />
        </p>
        <div className="space20" />
        <div style={{ display: "flex", gap: "8px" }}>
          <button className="button" onClick={() => exportColors("styles")}>
            export to styles
          </button>
          <button className="button" onClick={() => exportColors("variables")}>
            export to variables
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportAsStylesModal;
