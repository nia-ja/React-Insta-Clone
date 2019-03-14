import React from "react";
import Logo from './Logo';
import './searchBar.css';
import userIcon from '../../user_icon.svg';
import compassIcon from '../../compass_icon.svg';
import heartIcon from '../../heart_icon.svg';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <Logo />
            <input type="text" placeholder="Search" />
            <div className="search-bar-icons">
                <img className="search-bar-icon" src={compassIcon} alt="compass icon" />
                <img className="search-bar-icon heart-icon" src={heartIcon} alt="heart icon" />
                <img className="search-bar-icon user-icon" src={userIcon} alt="user icon" />
            </div>
        </div>
    );
}
export default SearchBar;