import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const styles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

ReactDOM.render(
  <React.StrictMode>
    <div style={styles}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
