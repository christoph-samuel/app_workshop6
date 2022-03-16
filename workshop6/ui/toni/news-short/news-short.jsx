import React from 'react';

export function NewsShort({heading, text}) {
    const styleContainer = {
        margin: '20px',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        width: '400px',
        height: 'max-content',
        backgroundColor: ''
    }

    const styleHeading = {
        textAlign: 'center'
    }

    return (
        <div style={styleContainer}>
            <h1 style={styleHeading}>{heading}</h1>
            <p>{text}</p>
        </div>
    );
}
