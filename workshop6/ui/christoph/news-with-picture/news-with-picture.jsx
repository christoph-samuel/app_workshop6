import React from 'react';

export function NewsWithPicture({text, imgSrc}) {
    const styleDiv = {
        border: '1px solid black',
        borderRadius: '5px',
        width: 'max-content',
        height: 'max-content',
        padding: '10px',
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    const styleImg = {width: "400px"}

    return (
        <div style={styleDiv}>
            <h1>{text}</h1>
            <img alt="Image" src={imgSrc} style={styleImg}/>
        </div>
    );
}
