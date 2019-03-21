import React from 'react';
import logo from '../../logo.svg';
import logoText from '../../Instagram_logo.svg';
import styled from 'styled-components';

const LogoWrapper = styled.div `
    min-width: 20%;
    max-width: 40%;
`;
const AppLogo = styled.img `
    max-height: 40px;
    @media (max-width: 500px) {
        ${props => (props.type === 'picture' ? `display: none` : null)}
    }
`;

const Logo = () => {
    return (
        <LogoWrapper>
            <AppLogo src={logo} type='picture' alt="Instagram logo" />
            <AppLogo src={logoText} alt="Instagram text logo" />
        </LogoWrapper>
    );
}
export default Logo;