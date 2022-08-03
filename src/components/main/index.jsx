import React from 'react';
import './index.css';

const main = (props) => {
  return (
    <main className="main">
      {props.children}
    </main>
  );
};

export default main;
