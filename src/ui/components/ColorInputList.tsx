import React from "react";
import ColorInputItem from "./ColorInputItem";

interface ColorInputListProps {
  colors: string[];
  onChange: (newColors: string[]) => void;
}

const ColorInputList: React.FC<ColorInputListProps> = ({
  colors,
  onChange,
}) => {
  const handleColorChange = (newColor: string, index: number) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    onChange(newColors);
  };

  return (
    <div className="color-input-list">
      {colors.map((color, index) => (
        <ColorInputItem
          key={index}
          color={color}
          onChange={(c) => handleColorChange(c, index)}
        />
      ))}
    </div>
  );
};

export default ColorInputList;
