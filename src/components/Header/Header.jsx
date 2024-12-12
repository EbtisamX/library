import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Welcome to BookVerse!</h2><br />
                <h4 className='header-text fs-18 fw-3'>Discover your favorite books across various genres. Search, explore, and start your literary adventure with us now!</h4>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header