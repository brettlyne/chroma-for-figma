import React from "react";

interface PalettePreviewProps {
  colors: string[];
  onClick: () => void;
}

const PalettePreview: React.FC<PalettePreviewProps> = ({ colors, onClick }) => {
  return (
    <div className="palette-preview" onClick={onClick}>
      {colors.map((color, index) => (
        <div key={index} style={{ backgroundColor: color }} />
      ))}
    </div>
  );
};

export default PalettePreview;
