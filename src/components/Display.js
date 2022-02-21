function Display(props) {


    // styles
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: 300
    }

    const displayStyle = {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 20,
        width: 200,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '5px solid black',
        color: 'white',
        background: 'rgb(50,50,50)'
    }

    return (
        <div style={containerStyle}>
            <div style={displayStyle}>
                {props.clipName}
            </div>
        </div>
    );
}

export default Display;