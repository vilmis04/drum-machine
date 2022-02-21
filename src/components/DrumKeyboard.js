import DrumPad from './DrumPad';

function DrumKeyboard(props) {

    const styles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        padding: '0.5rem',
        width: 500
    }

    return (
        <div style={styles}>
                <DrumPad id='heater-1' keyboardKey='Q' handleClick={props.handleClick}/>
                <DrumPad id='heater-2' keyboardKey='W' handleClick={props.handleClick}/>
                <DrumPad id='heater-3' keyboardKey='E' handleClick={props.handleClick}/>
                <DrumPad id='heater-4' keyboardKey='A' handleClick={props.handleClick}/>
                <DrumPad id='clap' keyboardKey='S' handleClick={props.handleClick}/>
                <DrumPad id='open-HH' keyboardKey='D' handleClick={props.handleClick}/>
                <DrumPad id='kick-n-hat' keyboardKey='Z' handleClick={props.handleClick}/>
                <DrumPad id='kick' keyboardKey='X' handleClick={props.handleClick}/>
                <DrumPad id='closed-HH' keyboardKey='C' handleClick={props.handleClick}/>
        </div>
    );
}

export default DrumKeyboard;