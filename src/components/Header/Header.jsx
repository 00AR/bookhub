import React from 'react'
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2>
                <br />
                <p className='header-text fs-18 fw-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur autem adipisci unde sint magni totam commodi voluptates veritatis ducimus modi distinctio harum eveniet voluptatibus illo, qui a repellendus beatae. Odit?
                </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header