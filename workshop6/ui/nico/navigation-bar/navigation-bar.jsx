import React from 'react';

export function NavigationBar({text}) {
    const styleNavigationBar = {
        width: '100%',
        margin: '10px'
    }
    const styleNavigation = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
    const styleButton = {
        border: '1px solid rgba(0,0,0,0.5)',
        borderRadius: '5px',
        backgroundColor: 'rgba(255,255,255,0)'
    }

    return (
        <div style={styleNavigationBar}>
            {text}
            <div style={styleNavigation}>
                <button style={styleButton}>Nachrichten</button>
                <button style={styleButton}>Bundesländer</button>
                <button style={styleButton}>Sport</button>
                <button style={styleButton}>Adabei</button>
                <button style={styleButton}>Digital</button>
                <select>
                    <option selected="true" disabled={true}>Konto</option>
                    <option>Übersicht</option>
                    <option>Abmelden</option>
                </select>
            </div>
        </div>
    );
}
