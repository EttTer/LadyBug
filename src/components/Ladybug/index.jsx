import React from 'react';
import './style.css';

const Ladybug = (ladybugState) => {
  const { posX, posY, orientation } = ladybugState;
  
  return (
    <div 
      className={`ladybug ladybug--${orientation}`} 
      style={{
        top: `${posX}px`,
        left: `${posY}px`,
      }}
    />
  );
};
export default Ladybug