import React, { useState, useEffect, useRef } from 'react';
import Odometer from 'react-odometerjs';  // Import Odometer
import 'odometer/themes/odometer-theme-default.css'; // Odometer's default CSS theme
import counterImg from "../assets/images/bg/counter-two-bg.svg"; // Counter background image
import TestimonialTwo from './TestimonialTwo';

const CounterTwo = () => {
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    awards: 0,
    members: 0,
    clients: 0,
    comments: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          setCounts({
            awards: 30,
            members: 180,
            clients: 500,
            comments: 250,
          });
        }, 500);
      });
    }
  }, [isVisible]);

  return (
    <div className="ep-counter-section-two pt-120" ref={counterRef}>
      <div className="counter-main rounded-30 position-relative">
        <div className="bg-img position-absolute top-0 start-50 translate-middle-x">
          <img src={counterImg} alt="counter-two-bg" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="counter-item-two text-center rounded-20">
                <div className="number">
                  <Odometer value={counts.awards} format="d" duration={1000} />+
                </div>
                <span className="short-info">Winning Award</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="counter-item-two text-center rounded-20">
                <div className="number">
                  <Odometer value={counts.clients} format="d" duration={1000} />+
                </div>
                <span className="short-info">Satisfied Clients</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="counter-item-two text-center rounded-20">
                <div className="number">
                  <Odometer value={counts.members} format="d" duration={1000} />+
                </div>
                <span className="short-info">Active Members</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="counter-item-two text-center rounded-20">
                <div className="number">
                  <Odometer value={counts.comments} format="d" duration={1000} />+
                </div>
                <span className="short-info">Clients Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial section two start */}
      <TestimonialTwo />
      {/* Testimonial section two end */}
    </div>
  );
};

export default CounterTwo;
