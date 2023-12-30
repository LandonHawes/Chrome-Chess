import React from 'react';
import Board from '../../components/Board';
import { reducer } from '../../reducer/reducer';
import { useReducer } from 'react';
import { initGameState } from '../../constants';
import Control from '../../components/Control/Control';
import TakeBack from '../../components/Control/bits/TakeBack';
import MovesList from '../../components/Control/bits/MovesList';
import AppContext from '../../contexts/Context';
import './Popup.css';
import Header from '../../components/header/Header';

function App() {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = {
    appState,
    dispatch,
  };

  return (
    <AppContext.Provider value={providerState}>
      <div className="App">
        <Header />
        <Board />
        <Control>
          <MovesList />
          <TakeBack />
        </Control>
      </div>
    </AppContext.Provider>
  );
}

export default App;
