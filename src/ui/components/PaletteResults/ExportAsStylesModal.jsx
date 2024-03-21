import React, { useState, useEffect } from "react";
import chroma from "chroma-js";

import SegmentedButton from "../../components/SegmentedButton";
import Icon from "../../components/Icon";

const ExportAsStylesModal = ({ onClose, palette }) => {
  const [mode, setMode] = useState("styles");
  const [prefix, setPrefix] = useState("data-");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const exportColors = () => {
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
          Export as:
          <SegmentedButton
            options={["styles", "variables"]}
            value={mode}
            onChange={(value) => setMode(value)}
          />
        </p>
        <div className="space16" />
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
        <button className="button" onClick={exportColors}>
          export to {mode}
        </button>
      </div>
    </div>
  );
};

export default ExportAsStylesModal;
