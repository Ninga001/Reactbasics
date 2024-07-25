import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="copyright">
            &copy; {new Date().getFullYear()}  NewEra
        </div>
        <div className="links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          
        </div>
        {/* Add other optional elements here */}
      </div>
    </footer>
  );
};

export default Footer;
