import React from 'react';
import UsernameForm from './usernameFormMemo';

class Hello extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            noEffect: ''
        };
    }

    updateUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    componentDidMount = () => {
        document.title = `Hello`;
    }

    componentDidUpdate = () => {
        document.title = `Hello ${this.state.username}`;
    }

    render() {
        return <section className='hello-user'>
                    <UsernameForm username={this.state.username} updateUsername={this.updateUsername}/>
                    No effect: <input value={this.state.noEffect} onChange={(e) => this.setState({noEffect : e.target.value})}/>
                </section>
    }
}

export default Hello;