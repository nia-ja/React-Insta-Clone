import React from "react";
import Logo from './Logo';
import userIcon from '../../user_icon.svg';
import compassIcon from '../../compass_icon.svg';
import heartIcon from '../../heart_icon.svg';
import styled from 'styled-components';

const Header = styled.header `
    width: 100%;
    height: 60px;
    padding: 40px 2% 40px 2%;
    border-bottom: 1px solid rgb(0, 0, 0);
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SearchInput = styled.input `
    max-width: 25%;
    background: url(data:image/png;base64,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) no-repeat scroll 7px 7px;
    padding-left: 30px;
    height: 40px;
    background-size: 20px;
    background-position-y: center;
    border-radius: 7px;
    border: 1px solid lightgrey;
    font-size: 1.6rem;
    &:focus {
        outline: none;
    }
    @media (max-width: 500px) {
        .search-bar input {
            max-width: 35%;
            margin-right: 4%; 
        }
    }
`;

const IconsWrapper = styled.div `
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    @media (max-width: 500px) {
        .search-bar-icons {
            max-width: 20%;
        }
    }
`;
const SearchBarIcon = styled.img `
    opacity: 0.9;
    margin-right: 10%;
    max-height: 30px;
    &:last-child {
        margin-right: 0;
    }
    ${props => (props.type === 'heart' ? `max-height: 39px` : null)}
`;

class SearchBar extends React.Component {
    onChange = (e)  => {
        this.props.filterUpdate(e.target.value);
    } 
    render() {
        return (
            <Header>
                <Logo />
                <SearchInput name="inputValue" type="text" placeholder="Search" onChange={this.onChange} />
                <IconsWrapper>
                    <SearchBarIcon src={compassIcon} alt="compass icon" />
                    <SearchBarIcon type="heart" src={heartIcon} alt="heart icon" />
                    <SearchBarIcon src={userIcon} alt="user icon" onClick={this.props.onClick} />
                </IconsWrapper>
            </Header>
        );
    }
}
export default SearchBar;