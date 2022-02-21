const soundSrc = {
    'Q': {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        name: 'Heater 1'
    },
    'W': {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        name: 'Heater 2'
    },
    'E': {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        name: 'Heater 3'
    },
    'A': {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        name: 'Heater 4'
    },
    'S': {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        name: 'Clap'
    },
    'D': {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        name: 'Open HH'
    },
    'Z': {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        name: "Kick n' Hat"
    },
    'X': {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        name: 'Kick'
    },
    'C': {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        name: 'Closed HH'
    }
}

function DrumPad(props) {
    const buttonStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        background: 'black',
        color: 'white',
        fontWeight: 'bold'
    }

    function handleEvent(key) {
        const audio = document.querySelector(`#${key}`);
        audio.play();
        props.handleClick(soundSrc[key]['name']);
    }

    function handleClick() {
        handleEvent(props.keyboardKey);
    }

    function handleKeyPress(event) {
        const pressedKey = event.key.toUpperCase();
        if (pressedKey in soundSrc) {
            handleEvent(pressedKey);
        }
    }

    
    return (
        <button id={props.id} onClick={handleClick} onKeyPress={(e)=>handleKeyPress(e)} style={buttonStyles}>
            <audio id={props.keyboardKey} src={soundSrc[props.keyboardKey]['url']}>
            </audio>
            {props.keyboardKey}
        </button>);
}

export default DrumPad;