import React from "react";

interface PalettePreviewProps {
  colors: string[];
}

const PalettePreview: React.FC<PalettePreviewProps> = ({ colors }) => {
  return (
    <div className="palette-preview">
      {colors.map((color, index) => (
        <div key={index} style={{ backgroundColor: color }} />
      ))}
    </div>
  );
};

export default PalettePreview;
