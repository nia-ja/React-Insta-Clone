import React from 'react';
import logoText from '../../Instagram_logo.svg';
import './login.css';

class Login extends React.Component {
    onSubmit = (e) => {
            e.preventDefault();
            this.login();
            e.target.reset();
    }
    login = () => {
        localStorage.setItem("username", true);
        window.location.reload(); 
    }
    render() {
        return (
            <div className="login-conteiner">
                <div className="login-main">
                    <img src={logoText} alt="Instagram text logo"/>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" placeholder="Phone number, username, or email" />
                        <input type="text" placeholder="Password" />
                        <button>Log in</button>
                    </form>
                    <p>OR</p>
                    <div className="facebook-login">
                        <img className="facebook-logo" src="https://img.icons8.com/office/48/000000/facebook.png" />
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