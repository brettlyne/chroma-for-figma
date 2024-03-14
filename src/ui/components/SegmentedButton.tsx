import React, { useState } from "react";

interface SegmentedButtonProps {
  options: string[];
  onChange?: (option: string) => void;
}

const SegmentedButton: React.FC<SegmentedButtonProps> = ({
  options,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <ul className="segmented-button">
      {options.map((option) => (
        <li key={option} onClick={() => handleOptionChange(option)}>
          <button className={option === selectedOption ? "selected" : ""}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SegmentedButton;
