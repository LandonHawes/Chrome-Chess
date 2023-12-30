import { useAppContext } from '../../../contexts/Context';
import { takeBack } from '../../../reducer/actions/move';
import React from 'react';
import './MovesList.css';

const TakeBack = () => {
  const { dispatch } = useAppContext();

  return (
    <div>
      <button className="take-back" onClick={() => dispatch(takeBack())}>
        Take Back
      </button>
    </div>
  );
};

export default TakeBack;
