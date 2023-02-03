import React from 'react';

export class Section extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='section'>
                <h2>{this.props.title}</h2>
                <form>
                    <input type='text'></input>
                    <input type='text'></input>
                    <input type='text'></input>
                </form>

                <div className='buttons'>
                    <button type='button'>Edit</button>
                    <button type='button'>Submit</button>
                </div>
            </div>
        );
    }
}
