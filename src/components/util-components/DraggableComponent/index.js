import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableComponent = ({ type, x, y, children, index }) => {
  const [, drag] = useDrag({
    item: ({ type, index }),
  });

  return (
    <div
      ref={drag}
      style={{ position: 'absolute', left: x, top: y }}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
}

export default DraggableComponent;