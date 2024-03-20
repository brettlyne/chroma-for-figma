import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import Icon from "../../components/Icon";

const ExportAsStylesModal = ({ onClose, palette, toast }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal">
      <Icon class="modal-close-btn" icon="close" onClick={onClose} />
      <div className="modal-content">
        <h2>Export as styles or variables</h2>
        <div className="space20" />
      </div>
    </div>
  );
};

export default ExportAsStylesModal;
