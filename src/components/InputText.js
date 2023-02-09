import React from 'react';
import styles from '../styles/inputText.module.css';

export class InputText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label>
                {this.props.label}:
                <input
                    className={styles.text}
                    type='text'
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                />
            </label>
        );
    }
}
