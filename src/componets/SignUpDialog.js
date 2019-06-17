import React from 'react';
import Dialog from './Dialog';

class SignUpDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcom aboard, ${this.state.login}!`);
    }

    render() {
        return (
            <Dialog title={this.props.title}
                    message={this.props.message}>
                <input value={this.state.login} onChange={this.handleChange}></input>
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }

}

export default SignUpDialog;
