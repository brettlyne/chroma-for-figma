import React, { useState } from "react";

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        {isChecked ? (
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
