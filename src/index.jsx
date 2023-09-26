import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Ladybug from './components/Ladybug';
import './style.css';

const STEP_SIZE = 25;

const App = () => {
  const [ladybugState, setLadybugState] = useState({
    posX: 100,
    posY: 100,
    orientation: 'right'
  });

  const handleKeyUp = ({ code }) => {
    let { posX, posY, orientation } = ladybugState;

    if (code === 'ArrowUp') {
      orientation = 'up';
      posX -= STEP_SIZE;
    } else if (code === 'ArrowLeft') {
      orientation = 'left';
      posY -= STEP_SIZE;
    } else if (code === 'ArrowRight') {
      orientation = 'right';
      posY += STEP_SIZE;
    } else if (code === 'ArrowDown') {
      orientation = 'down';
      posX += STEP_SIZE;
    }

    setLadybugState({ ...ladybugState, posX, posY, orientation });
  };

  return (
    <div 
      tabIndex={-1}
      className="field"
      onKeyDown={handleKeyUp}
    >
      <header>Click anywhere to start the game</header>
      <Ladybug {...ladybugState} />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);