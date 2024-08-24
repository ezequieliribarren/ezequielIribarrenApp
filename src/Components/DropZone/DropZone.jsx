// DropZone.js
import React from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'SPHERE',
    drop: () => onDrop(),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="drop-zone"
      style={{
        backgroundColor: isOver ? '#00d9ff' : 'rgba(0, 0, 0, 0.3)',
      }}
    >
      {isOver ? '¡Suelta aquí!' : 'Arrastra aquí'}
    </div>
  );
};

export default DropZone;
