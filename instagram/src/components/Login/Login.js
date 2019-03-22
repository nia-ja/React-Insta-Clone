import React from 'react';
import logoText from '../../Instagram_logo.svg';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        const user = this.state.username;
        const password = this.state.password;
        localStorage.setItem('user', user);
        localStorage.setItem('password', password);
        window.location.reload(); 
    }

    render() {
        return (
            <div className="login-conteiner">
                <div className="login-main">
                    <img src={logoText} alt="Instagram text"/>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" placeholder="Phone number, username, or email" onChange={this.onChange} value={this.state.username} name="username" required />
                        <input type="password" placeholder="Password" onChange={this.onChange} value={this.state.password} name="password" required />
                        <button>Log in</button>
                    </form>
                    <p>OR</p>
                    <div className="facebook-login">
                        <img className="facebook-logo" src="https://img.icons8.com/office/48/000000/facebook.png" alt="White letter F on blue background" />
                        <p>Log in with Facebook</p>
                    </div>
                    <a href="/">Forgot password?</a>
                </div>
                <div className="login-sign-up">
                    <p>Don't have an account?</p>
                    <a href="/">Sign up</a>
                </div>
            </div>
        )
    }
}

export default Login;