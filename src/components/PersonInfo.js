import React from 'react';
import { InputText } from './InputText';
import styles from '../styles/personInfo.module.css';

export class PersonInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: '', email: '', phone: '' };

        // TODO: not sure if this is a good approach
        // in general I hate bind(this), but this is what was in the docs
        // and I do like normal function over a property set to an arrow function to avoid 'losing this'
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
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <InputText
                    name='name'
                    value={this.state.name}
                    label='Name'
                    handleChange={this.handleChange}
                />

                <InputText
                    name='email'
                    value={this.state.email}
                    label='Email'
                    handleChange={this.handleChange}
                />

                <InputText
                    name='phone'
                    value={this.state.phone}
                    label='Phone'
                    handleChange={this.handleChange}
                />

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
