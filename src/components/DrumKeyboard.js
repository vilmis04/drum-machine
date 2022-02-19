import DrumPad from './DrumPad';

function DrumKeyboard(props) {


    return (
        <div className='grid'>
            <DrumPad id='function' keyboardKey='Q'/>
            <DrumPad id='function' keyboardKey='W'/>
            <DrumPad id='function' keyboardKey='E'/>
            <DrumPad id='function' keyboardKey='A'/>
            <DrumPad id='function' keyboardKey='S'/>
            <DrumPad id='function' keyboardKey='D'/>
            <DrumPad id='function' keyboardKey='Z'/>
            <DrumPad id='function' keyboardKey='X'/>
            <DrumPad id='function' keyboardKey='C'/>
        </div>
    );
}

export default DrumKeyboard;