import React from 'react';
import { Section } from './Section';
import { PersonInfo } from './PersonInfo';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Section title='General Information'>
                    <PersonInfo></PersonInfo>
                </Section>
                <Section title='Education'></Section>
                <Section title='Work'></Section>
            </div>
        );
    }
}
