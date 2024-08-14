import React from 'react';

const TopBar = () => {
    return (
        // <div id="topbar" className="fixed-top d-flex align-items-center ">
        <div id="topbar" className="fixed-top d-flex align-items-center header-scrolled">
            <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
              <div className="contact-info d-flex align-items-center">
                <i className="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">info@example.com</a>
                <i className="bi bi-phone-fill phone-icon"></i> +93 786 55 55 55
              </div>
              <div className="cta d-none d-md-block">
                <a href="#about" className="scrollto">Advertise with us</a>
              </div>
            </div>
          </div>
    );
};

export default TopBar;