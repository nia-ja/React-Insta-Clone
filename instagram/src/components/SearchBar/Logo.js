import React from 'react';
import logo from '../../logo.svg';
import logoText from '../../Instagram_logo.svg';
import './logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} className="app-logo pic-logo" alt="Instagram picture logo" />
            <img src={logoText} className="app-logo" alt="Instagram text logo" />
        </div>
    );
}
export default Logo;