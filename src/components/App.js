import React from 'react';
import { Section } from './Section';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Section title="general information"></Section>
                <Section title="educational experience"></Section>
                <Section title="practical experience"></Section>
            </div>
        );
    }
}
