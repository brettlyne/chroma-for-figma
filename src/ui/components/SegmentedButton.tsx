import React from "react";

interface SegmentedButtonProps {
  options: string[];
  onChange: (option: string) => void;
  value: string;
}

const SegmentedButton: React.FC<SegmentedButtonProps> = ({
  options,
  onChange,
  value,
}) => {
  return (
    <ul className="segmented-button">
      {options.map((option) => (
        <li key={option} onClick={() => onChange(option)}>
          <button className={option === value ? "selected" : ""}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SegmentedButton;
