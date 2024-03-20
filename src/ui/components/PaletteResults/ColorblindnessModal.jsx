import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { colorBlindSim } from "../../utils/colorBlind";
import Icon from "../../components/Icon";

const types = ["deuteranopia", "protanopia", "tritanopia"];

const ColorblindnessModal = ({
  onClose,
  palette,
  children,
  colorblindResults,
}) => {
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
        <h2>Simulated color blindness</h2>
        <div className="space20" />

        <p>normal</p>
        <div className="space4" />
        <div className="results-steps">
          {palette.map((color, index) => (
            <div key={index} style={{ backgroundColor: color }} />
          ))}
        </div>

        <div className="space16" />

        {types.map((type, index) => (
          <div key={index}>
            <p className={colorblindResults.includes(type) ? "unsafe" : ""}>
              {type}
              {colorblindResults.includes(type) ? (
                <>
                  &nbsp;
                  <Icon icon="small_x" />
                </>
              ) : null}
            </p>
            <div className="space4" />

            <div className="results-steps">
              {palette.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: colorBlindSim(color, type) }}
                />
              ))}
            </div>
            <div className="space16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorblindnessModal;
