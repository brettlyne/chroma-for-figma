import React from "react";
import copy from "copy-to-clipboard";
import chroma from "chroma-js";
import { Draggable } from "react-beautiful-dnd";

import Icon from "./Icon";

interface ColorInputItemProps {
  id: string;
  index: number;
  color: string;
  onChange: (newColor: string) => void;
  onEyedropper: () => void;
  onPaintBucket: () => void;
  onDragHandleDrag: () => void;
  toast: (toastString: string) => void;
}

const ColorInputItem: React.FC<ColorInputItemProps> = ({
  id,
  index,
  color,
  onChange,
  onEyedropper,
  onPaintBucket,
  onDragHandleDrag,
  onDelete,
  lastItemInList,
  toast,
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
    toast(`${color} copied to clipboard`);
  };

  const setFill = (color) => {
    const [r, g, b] = chroma(color).rgb();
    parent.postMessage(
      {
        pluginMessage: {
          type: "set-fill",
          color: { r: r / 255, g: g / 255, b: b / 255 },
        },
      },
      "*"
    );
  };

  return (
    <Draggable draggableId={id} index={index} isDragDisabled={lastItemInList}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="color-input-item"
        >
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
            <button onClick={() => setFill(color)}>
              <Icon icon="paint_bucket" />
            </button>
            {!lastItemInList ? (
              <>
                <Icon className="drag-handle" icon="drag_handle" />
                <button onClick={onDelete}>
                  <Icon icon="trash" />
                </button>
              </>
            ) : null}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ColorInputItem;
