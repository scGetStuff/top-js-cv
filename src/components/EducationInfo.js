import React from 'react';
import { InputText } from './InputText';
import { InputInteger } from './InputInteger';
import styles from '../styles/educationInfo.module.css';

export class EducationInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: '', degree: '', start: '', end: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const year = new Date().getFullYear();
        return (
            <form
                className={styles.form}
                onSubmit={this.handleSubmit}
                autoComplete='off'
            >
                <InputText
                    name='name'
                    value={this.state.name}
                    label='School'
                    handleChange={this.handleChange}
                />

                <InputText
                    name='degree'
                    value={this.state.degree}
                    label='Degree'
                    handleChange={this.handleChange}
                />

                <div className={styles.years}>
                    <InputInteger
                        name='start'
                        value={this.state.start}
                        label='Start year'
                        handleChange={this.handleChange}
                        min='1950'
                        max={year}
                    />

                    <InputInteger
                        name='end'
                        value={this.state.end}
                        label='End year'
                        handleChange={this.handleChange}
                        min='1950'
                        max={year}
                    />
                </div>
                <div className='buttons'>
                    <button type='button' value='Edit'>
                        Edit
                    </button>
                    <button type='submit' value='Submit'>
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}
