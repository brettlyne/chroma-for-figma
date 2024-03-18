import React from "react";
import { Droppable } from "react-beautiful-dnd";

import ColorInputItem from "./ColorInputItem";
import Icon from "./Icon";

interface ColorInputListProps {
  id: string;
  colors: string[];
  setColors: (newColors: string[]) => void;
  toast: (toastString: string[]) => void;
}

const ColorInputList: React.FC<ColorInputListProps> = ({
  id,
  colors,
  setColors,
  toast,
}) => {
  const handleColorChange = (newColor: string, index: number) => {
    const newColors = [...colors];
    newColors[index].color = newColor;
    setColors(newColors);
  };

  const handleDelete = (index: number) => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  const addColor = () => {
    const newColors = [...colors];
    newColors.push({ color: "#00ff00", id: Math.random().toString() });
    setColors(newColors);
  };

  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="color-input-list"
        >
          {colors.map((item, index) => (
            <ColorInputItem
              index={index}
              key={item.id}
              id={item.id}
              color={item.color}
              onChange={(c) => handleColorChange(c, index)}
              lastItemInList={colors.length === 1}
              onDelete={() => handleDelete(index)}
              toast={toast}
            />
          ))}
          <div className="add-color" onClick={addColor}>
            <Icon icon="add" />
            <p>add color</p>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ColorInputList;
