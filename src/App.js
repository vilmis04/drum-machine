import logo from './logo.svg';
import Display from './components/Display';
import DrumKeyboard from './components/DrumKeyboard';

function App() {
  return (
    <div id='drum-machine' className='btn btn-primary'>
      <Display />
      <DrumKeyboard />
    </div>
  );
}

export default App;
