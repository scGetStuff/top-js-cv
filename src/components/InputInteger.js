import React from 'react';
import styles from '../styles/inputInteger.module.css';

export class InputInteger extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label>
                {this.props.label}:
                <input
                    className={styles.number}
                    type='number'
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                    min='1900'
                    max={new Date().getFullYear()}
                />
            </label>
        );
    }
}
