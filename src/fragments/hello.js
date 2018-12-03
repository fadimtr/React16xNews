import React , { Fragment } from 'react';

class Fragments extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: ''
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
        return <Fragment>
                    <form>
                        <label data-for='username'>Please enter your name: </label>
                        <input name='username' value={this.state.username} onChange={this.updateUsername}/>
                    </form>
                    <span>Welcome!</span>
                </Fragment>
    }
}

export default Fragments;