// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const   Header = () => {
    return (  


        // <header id="header" className="fixed-top d-flex align-items-center ">
        <header id="header" className="fixed-top d-flex align-items-center header-scrolled hidden">
          <div className="container d-flex align-items-center justify-content-between">
      
            <h1 className="logo"><a href="index.html">AFBH</a></h1>
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">Women</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto " href="#portfolio">Business</a></li>
                <li><a className="nav-link scrollto" href="#team">Entrepreneurs</a></li>
                {/* <!-- <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li> --> */}
                <li><Link to="/blog">Blog</Link></li>
                {/* <!-- <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                  <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                      <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Drop Down 2</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                  </ul>
                </li> --> */}
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
      
          </div>
        </header>
        
      
    );
};

export default Header;