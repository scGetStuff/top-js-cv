import React from 'react';

export class InputText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label>
                {this.props.label}:
                <input
                    type='text'
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                />
            </label>
        );
    }
}
