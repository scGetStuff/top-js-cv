import React from 'react';

export class Section extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='section'>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}
