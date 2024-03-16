import React from "react";
import { Droppable } from "react-beautiful-dnd";

import ColorInputItem from "./ColorInputItem";

interface ColorInputListProps {
  id: string;
  colors: string[];
  setColors: (newColors: string[]) => void;
}

const ColorInputList: React.FC<ColorInputListProps> = ({
  id,
  colors,
  setColors,
}) => {
  const handleColorChange = (newColor: string, index: number) => {
    const newColors = [...colors];
    newColors[index].color = newColor;
    setColors(newColors);
  };

  const handleDragEnd = (result: any) => {
    console.log(result);

    // if (!result.destination) {
    //   return;
    // }

    // const newColors = [...colors];
    // const [removed] = newColors.splice(result.source.index, 1);
    // newColors.splice(result.destination.index, 0, removed);
    // setColors(newColors);
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
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ColorInputList;
