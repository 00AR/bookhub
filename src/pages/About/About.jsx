import React from 'react'
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              This is a simple website to explore the books available in
              the Open Library of Internet Archive. Home Page provides a 
              search bar to search the title of the book of interest.
              The app makes a request using Open Library Search API and 
              collects all the search results to display. 
              You can click on the title of any book to display more 
              information about that book.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About