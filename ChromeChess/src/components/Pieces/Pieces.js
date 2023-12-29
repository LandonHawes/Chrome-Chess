import './Pieces.css';
import React from 'react';
import Piece from './Piece';
import { createPosition, copyPosition } from '../../helper';
import { useState, useRef } from 'react';
import { makeNewMove } from '../../reducer/actions/move';
import { useAppContext } from '../../contexts/Context';

const Pieces = () => {
  const { appState, dispatch } = useAppContext();

  const currentPosition = appState.position;
  console.log(currentPosition);

  const ref = useRef();
  const calculateCoords = (e) => {
    const { width, left, top } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    return { x, y };
  };

  const onDrop = (e) => {
    const newPosition = copyPosition(currentPosition);
    const { x, y } = calculateCoords(e);
    const [p, rank, file] = e.dataTransfer.getData('text/plain').split(',');
    newPosition[rank][file] = '';
    newPosition[x][y] = p;
    dispatch(makeNewMove({ newPosition }));
  };

  const onDragOver = (e) => e.preventDefault();

  return (
    <div ref={ref} onDrop={onDrop} onDragOver={onDragOver} className="pieces">
      {currentPosition?.map((r, rank) =>
        r.map((f, file) =>
          currentPosition[rank][file] ? (
            <Piece
              rank={rank}
              file={file}
              piece={currentPosition[rank][file]}
              key={rank + '' + file}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Pieces;
