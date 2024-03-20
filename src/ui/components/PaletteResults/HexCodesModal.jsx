import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import copy from "copy-to-clipboard";

import Icon from "../../components/Icon";

const HexCodesModal = ({ onClose, palette, toast }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const copyColorsToClipboard = () => {
    copy(palette.join("\n"));
    toast(`Hex codes copied to clipboard`);
  };

  return (
    <div className="modal">
      <Icon class="modal-close-btn" icon="close" onClick={onClose} />
      <div className="modal-content">
        <h2>Palette hex codes</h2>
        <div className="space20" />
        <textarea
          className="code"
          style={{ width: "100%", padding: "10px" }}
          value={palette.join("\n")}
          readOnly
          rows={palette.length}
        />
        <div className="space8" />
        <button className="icon-button" onClick={copyColorsToClipboard}>
          <Icon icon="copy" />
        </button>
      </div>
    </div>
  );
};

export default HexCodesModal;
