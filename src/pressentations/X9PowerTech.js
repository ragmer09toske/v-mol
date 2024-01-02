import React from 'react';
import './X9PowerTech.css'; // Import your CSS file

const X9PowerTech = () => {
  return (
    <div className="container">
      <h1>X-9 POWER TECH</h1>
      <h2>COMPANY STATEMENT</h2>
      
      <section className="philosophy">
        <h3>Our Philosophy</h3>
        <p>X-9 Power Tech prioritizes innovative sustainability, utilizing state-of-the-art technology, and valuing collaboration while emphasizing environmental stewardship.</p>
      </section>
      
      <section className="mission-vision">
        <div>
          <h3>Mission</h3>
          <p>At X-9 Power Tech, our mission is to revolutionize the renewable energy landscape by harnessing atmospheric charges to generate clean, sustainable electricity.</p>
        </div>
        <div>
          <h3>Vision</h3>
          <p>Our vision is to light up the globe, transforming the way the world accesses and utilizes energy.</p>
        </div>
      </section>
      
      {/* Add more sections like Sustainability Impact, Innovation Leadership, etc. as required */}
      
      <section className="products-services">
        <h2>KEY PRODUCTS & SERVICES</h2>
        <p>Our proprietary systems capture and convert atmospheric charges into electricity, offering a reliable and scalable source of renewable energy.</p>
        <p>We provide turnkey solutions, including system design, installation, and ongoing maintenance.</p>
      </section>
      
      {/* Continue adding sections for Company History, Team, Market Analysis, etc. */}
      
      <section className="team">
        <h2>OUR TEAM</h2>
        <div className="team-members">
          {/* You can populate team members here */}
        </div>
      </section>
      
      <section className="market-analysis">
        <h2>MARKET ANALYSIS</h2>
        {/* Add content related to market analysis here */}
      </section>
      
      <section className="contact">
        <h2>CONTACT US</h2>
        <p>Connect with X-9 Power Tech today to embark on a sustainable energy journey.</p>
        <p>Contact us to explore innovative solutions, tailored to meet your energy needs and contribute to a greener future.</p>
        <p>Phone: +26657122346</p>
        <p>Website: <a href="http://www.x9powertech2.odoo.com/">www.x9powertech2.odoo.com</a></p>
        <p>Location: Maseru, Lesotho</p>
      </section>
      
      <footer>
        <p>THANK YOU</p>
      </footer>
    </div>
  );
}

export default X9PowerTech;
