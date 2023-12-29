import React from 'react';

const Piece = ({ rank, file, piece }) => {
  const onDragStart = (e) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', `${piece},${file},${rank}`);
    setTimeout(() => {
      e.target.style.display = 'none';
    }, 0);
  };

  const onDragEnd = (e) => (e.target.style.display = 'block');

  return (
    <div
      draggable
      className={`piece ${piece} p-${file}${rank}`}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};

export default Piece;
