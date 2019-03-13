import React from "react";
import Logo from './Logo';
import './searchBar.css';


const SearchBar = () => {
    return (
        <div className="search-bar">
            <Logo />
            <input type="text" placeholder="Search" />
            <div className="search-bar-icons">
                <img src="https://img.icons8.com/android/40/000000/compass.png" alt="compass icon" />
                <img src="https://img.icons8.com/ios/50/000000/hearts.png" alt="heart icon" />
                <img src="https://img.icons8.com/pastel-glyph/50/000000/person-male.png" alt="user icon" />
            </div>
        </div>
    );
}
export default SearchBar;