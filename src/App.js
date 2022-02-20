import logo from './logo.svg';
import Display from './components/Display';
import DrumKeyboard from './components/DrumKeyboard';

function App() {
  


  const appStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '5px solid black',
    width: '50%'
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
       <DrumKeyboard />
      </div>
      <div style={displayStyles}>
        <Display clipName={clipName}/>
      </div>
    </div>
  );
}

export default App;
