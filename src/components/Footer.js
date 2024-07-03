import React from 'react';
import '../styles/Common.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Microsoft Store</h3>
        <ul>
          <li><a href="/">Account Profile</a></li>
          <li><a href="/">Microsoft store support</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Developer & IT</h3>
        <ul>
          <li><a href="/">Developer center</a></li>
          <li><a href="/">Visual studio</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Company</h3>
        <ul>
          <li><a href="/">Careers</a></li>
          <li><a href="/">About Microsoft</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Business</h3>
        <ul>
          <li><a href="/">Microsoft Cloud</a></li>
          <li><a href="/">Company News</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p><a href="/">English (United States)</a></p>
        <p><a href="/">Terms of Use</a></p>
        <p><a href="/">Privacy</a></p>
        <p>&copy; Microsoft 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
