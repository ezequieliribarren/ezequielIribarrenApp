// DraggableSphere.js
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableSphere = ({ isDropped }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'SPHERE',
    item: { type: 'SPHERE' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    !isDropped && (
      <div
        ref={drag}
        className="draggable-sphere bounce"
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      ></div>
    )
  );
};

export default DraggableSphere;
