import React from 'react';

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>TEST {new Date().toDateString()}</h1>
            </div>
        );
    }
}
