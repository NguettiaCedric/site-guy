import React from 'react';
import footerLogo from '../assets/images/logo/logo2.svg';
import VideoImg from '../assets/images/img/video-banner-img.png';
import VideoModal from './VideoModal';
import ScrollToTopButton from './ScrollToTopButton';
import { Link } from 'react-router-dom';


const FooterTwo = () => {
  return (
    <>
      {/* scroll to top start */}
      <ScrollToTopButton />
      {/* scroll to top end */}
      <footer className="ep-footer-section ep-footer-section-two">
        <div className="footer-bg">
          <div className="container">
            <div className="video-image position-relative">
              <img loading="lazy" src={VideoImg} alt="video-banner-img" className="img-fluid w-100" />
              <VideoModal buttonClass="vidplay border-0 icon-box icon-box-secondary rounded-pill position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center text-white custom-wrapper-hover custom-inner-hover" />
            </div>
            <div className="footer-main">
              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-about">
                    <div className="logo">
                      <a href="index.html">
                        <img src={footerLogo} alt="logo2" />
                      </a>
                    </div>
                    <div className="short-info">
                      <p>Don't just take our word for it hear what our customers</p>
                    </div>
                    <div className="social-icon-box mt-30">
                      <ul className="list-unstyled">
                        <li>
                          <Link target='_blank' to="https://www.facebook.com/" className="d-inline-flex justify-content-center align-items-center">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link target='_blank' to="https://www.pinterest.com/" className="d-inline-flex justify-content-center align-items-center">
                            <i className="fab fa-pinterest-p"></i>
                          </Link>
                        </li>
                        <li>
                          <Link target='_blank' to="https://bd.linkedin.com/" className="d-inline-flex justify-content-center align-items-center">
                            <i className="fab fa-linkedin"></i>
                          </Link>
                        </li>
                        <li>
                          <Link target='_blank' to="https://www.instagram.com/" className="d-inline-flex justify-content-center align-items-center">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-links services-widget">
                    <h4 className="footer-title">Link</h4>
                    <ul className="list-unstyled text-center text-md-start">
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/projects">Projects</Link></li>
                      <li><Link to="/Blog">Blog</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget recent-post-widget">
                    <h4 className="footer-title">Recent Post</h4>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/blog">
                          <span className="title">
                            Secure your future with IT
                          </span>
                          <small>
                            <i className="fas fa-calendar-alt"></i>
                            October 19, 2024
                          </small>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          <span className="title">
                            TNavigate your future with technology
                          </span>
                          <small>
                            <i className="fas fa-calendar-alt"></i>
                            October 19, 2024
                          </small>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget newsletter-widget">
                    <h4 className="footer-title">Newslatter</h4>
                    <p>Empowering progress through digital innovation</p>
                    <form action="#" className="mt-30 text-center">
                      <div className="input-group position-relative">
                        <input type="email" className="form-control shadow-none" placeholder="Enter Email" />
                        <button className="position-absolute top-0 end-0 z-3" type="submit"><i
                          className="fas fa-paper-plane"></i></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="row g-3">
                  <div className="col-lg-6">
                    <div className="footer-copyright text-center text-lg-start">
                      <p>© Yoursitename 2024 | All Rights Reserved</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="footer-menu text-center text-lg-end">
                      <ul className="list-unstyled">
                        <li className="d-inline-block"><Link to="#">Trams & Condition</Link></li>
                        <li className="d-inline-block"><Link to="#">Privacy Policy</Link></li>
                        <li className="d-inline-block"><Link to="/contact">Contact Us</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterTwo
