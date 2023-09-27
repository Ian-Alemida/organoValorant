import React from 'react';
import './time.css'

const Time = (props) => {
    const styles = [
        { backgroundColor: props.corPrimaria },
        { borderColor: props.corSecundaria}
    ]

    return (
        <div className='times' style={styles[0]}>
            <h3 style={styles[1]}>{props.nome}</h3>
        </div>
    );
}

export default Time;
