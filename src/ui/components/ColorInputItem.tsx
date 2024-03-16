import React from "react";
import copy from "copy-to-clipboard";
import chroma from "chroma-js";

import Icon from "./Icon";

interface ColorInputItemProps {
  color: string;
  onChange: (newColor: string) => void;
  onEyedropper: () => void;
  onPaintBucket: () => void;
  onDragHandleDrag: () => void;
}

const ColorInputItem: React.FC<ColorInputItemProps> = ({
  color,
  onChange,
  onEyedropper,
  onPaintBucket,
  onDragHandleDrag,
}) => {
  const [textInput, setTextInput] = React.useState(
    color.replace("#", "").toUpperCase()
  );

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value.replace("#", "").toUpperCase());
    onChange(event.target.value);
  };

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  const handleTextInputBlur = () => {
    const newColor = chroma.valid(textInput) ? textInput : color;
    const newHex = chroma(newColor).hex("rgb");
    setTextInput(newHex.replace("#", "").toUpperCase());
    onChange(newHex);
  };

  const copyColorToClipboard = () => {
    copy(color);
  };

  return (
    <div className="color-input">
      <input type="color" value={color} onChange={handleColorChange} />
      <input
        type="text"
        value={textInput}
        onChange={handleTextInput}
        onBlur={handleTextInputBlur}
      />

      <button onClick={copyColorToClipboard}>
        <Icon icon="copy" />
      </button>
      <button onClick={onEyedropper}>
        <Icon icon="eyedropper" />
      </button>
      <button onClick={onPaintBucket}>
        <Icon icon="paint_bucket" />
      </button>
      <Icon className="drag-handle" icon="drag_handle" />
    </div>
  );
};

export default ColorInputItem;
