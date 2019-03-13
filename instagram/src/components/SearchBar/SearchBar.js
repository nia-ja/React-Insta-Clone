import React from "react";
import Logo from './Logo';
import './searchBar.css';


const SearchBar = () => {
    return (
        <div className="search-bar">
            <Logo />
            <input type="text" placeholder="Search" />
            <div className="search-bar-icons">
                <img src="https://img.icons8.com/ios/30/000000/compass.png" alt="compass icon" />
                <img src="https://img.icons8.com/ios/36/000000/hearts.png" alt="heart icon" />
                <img src="https://img.icons8.com/ios/30/000000/gender-neutral-user.png" alt="user icon" />
            </div>
        </div>
    );
}
export default SearchBar;