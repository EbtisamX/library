import React from 'react';
import "./About.css";
import aboutImg from "../../images/library.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>BookVerses</h2>
            <p className='fs-17'>Reading Haven is a platform dedicated to book lovers and readers. Whether you are an avid reader looking for your next favorite novel or someone just starting their reading journey, Reading Haven provides an extensive collection of books, reviews, and recommendations to help guide you through your literary adventure.

Our mission is to make books accessible to everyone and to create a community of passionate readers who share their thoughts and reviews on the books they love. From fiction to non-fiction, from the latest bestsellers to hidden gems, Reading Haven has something for everyone.

Join us on a journey to explore the world of books and discover new stories, authors, and perspectives that will inspire, entertain, and educate. Welcome to Reading Haven, where reading becomes a shared experience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
