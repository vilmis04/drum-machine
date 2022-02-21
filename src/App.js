import logo from './logo.svg';
import Display from './components/Display';
import DrumKeyboard from './components/DrumKeyboard';
import React, { useState } from 'react';

function App() {
  
  const [text, setText] = useState('');
  
  function updateDisplayText (displayText) {
    setText(displayText);
  }

// styles

  const appStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    border: '5px solid black',
    // width: 845,
    width: 'fit-content',
    flexWrap: 'wrap'
  }

  const keyboardStyles = {
    flex: '1'
  }

  const displayStyles = {
    flex: '1'
  }
  
  return (
    <div id='drum-machine' style={appStyles} >
      <div style={keyboardStyles}>
       <DrumKeyboard handleClick={updateDisplayText} />
      </div>
      <div style={displayStyles}>
        <Display clipName={text}/>
      </div>
    </div>
  );
}

export default App;
