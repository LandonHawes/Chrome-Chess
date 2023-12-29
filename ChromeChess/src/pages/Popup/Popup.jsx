import React from 'react';
import { useReducer } from 'react';
import './Popup.css';
import Board from '../../components/Board';
import AppContext from '../../contexts/Context';
import { reducer } from '../../reducer/reducer';
import { initGameState } from '../../constant';

const Popup = () => {
  const [appState, dispatch] = useReducer(reducer, { initGameState });

  const providerState = {
    appState,
    dispatch,
  };
  return (
    <AppContext.Provider value={providerState}>
      <div className="App">
        <Board />
      </div>
    </AppContext.Provider>
  );
};

export default Popup;
