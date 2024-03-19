import React, { useState } from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        {checked ? (
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="m7.3 12.7 2.6 2.7h.2l6.7-6.7"
          />
        ) : null}
        <rect
          width="16.5"
          height="16.5"
          x="3.8"
          y="3.8"
          stroke="currentColor"
          stroke-width="1.5"
          rx="3.3"
        />
      </svg>
      {label}
    </label>
  );
};

export default Checkbox;
