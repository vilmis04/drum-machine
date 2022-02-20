import DrumPad from './DrumPad';

function DrumKeyboard(props) {

    const styles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        padding: '0.5rem'
    }

    return (
        <div style={styles}>
                <DrumPad id='heater-1' keyboardKey='Q'/>
                <DrumPad id='heater-2' keyboardKey='W'/>
                <DrumPad id='heater-3' keyboardKey='E'/>
                <DrumPad id='heater-4' keyboardKey='A'/>
                <DrumPad id='clap' keyboardKey='S'/>
                <DrumPad id='open-HH' keyboardKey='D'/>
                <DrumPad id='kick-n-hat' keyboardKey='Z'/>
                <DrumPad id='kick' keyboardKey='X'/>
                <DrumPad id='closed-HH' keyboardKey='C'/>
        </div>
    );
}

export default DrumKeyboard;