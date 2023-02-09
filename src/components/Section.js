import React from 'react';
import styles from '../styles/section.module.css';

export class Section extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // TODO: not sure how to do more than one class
            // <div className={".fcol "  + styles.section}>
            <div className={styles.section}>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}
