const soundSrc = {
    'Q': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    'W': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    'E': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    'A': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    'S': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    'D': 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    'Z': 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    'X': 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    'C': 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}

function DrumPad(props) {
    
    return (
        <div className="btn btn-secondary">
            {props.keyboardKey}
        </div>);
}

export default DrumPad;