import React, { useState, useEffect, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import counterImg from '../assets/images/img/counter-image.png';
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Counter = () => {
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
    <section className="ep-counter-section pt-120" ref={counterRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="heading-style1 mb-40">
              Connecting the Dots of Digital Innovation Worldwide!
            </motion.h2>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="counter-text">
              <p>
                The IT industry offers diverse career opportunities, from
                network administration to software development. As technology
                continues to evolve, the importance of IT in shaping the future
                of businesses.
              </p>
              <div className="counter-wrapper">
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <Odometer value={counts.awards} format="d" duration={1000} />+
                      </div>
                      <span className="short-info">Winning Award</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <Odometer value={counts.members} format="d" duration={1000} />+
                      </div>
                      <span className="short-info">Active Members</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <Odometer value={counts.clients} format="d" duration={1000} />+
                      </div>
                      <span className="short-info">Satisfied Client</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <Odometer value={counts.comments} format="d" duration={1000} />+
                      </div>
                      <span className="short-info">Clients Comment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="counter-image rounded-20 overflow-hidden ms-lg-auto">
              <img loading="lazy" src={counterImg} alt="Counter Section" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
