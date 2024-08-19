import React from 'react';
import './Grid.css';

const Grid = () => {
  const rows = 20;
  const cols = 20;
  const cells = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      cells.push(<div key={`${i}-${j}`} className="grid-cell"></div>);
    }
  }

  return (
    <div className="animated-background">
      <div className="anime"></div>
      {cells}
    </div>
  );
};

export default Grid;
