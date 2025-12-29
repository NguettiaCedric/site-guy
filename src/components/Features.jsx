import React from 'react';
import featureImg1 from '../assets/images/features/feature-img-1.png';
import featureImg2 from '../assets/images/features/feature-img-2.png';
import featureIcon1 from '../assets/images/icons/feature-icon-1.svg';
import featureIcon2 from '../assets/images/icons/feature-icon-2.svg';
import featureIcon3 from '../assets/images/icons/feature-icon-3.svg';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

const Features = () => {
  return (
    <section className="ep-features-section overflow-hidden pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="feature-image position-relative">
              <div className="img-one overflow-hidden rounded-20 position-relative">
                <img loading="lazy" src={featureImg1} alt="about-img"
                  className="img-fluid w-100 rounded-20" />
              </div>
              <div className="img-two overflow-hidden position-absolute">
                <img loading="lazy" src={featureImg2} alt="about-img"
                  className="img-fluid w-100 rounded-20" />
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <div className="feature-text">
              <SectionTitle subTitle="Our features" title="Connecting the Dots of Innovation" />
              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="feature-item d-flex align-items-center">
                <div
                  className="icon-box rounded-20 icon-box-primary d-flex justify-content-center align-items-center">
                  <img src={featureIcon1} alt="feature-icon" />
                </div>
                <div className="info">
                  <h4 className="feature-title">Tech Vista Solutions</h4>
                  <p>Our mission is there are many variations of passages Lorem Ipsum available</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="feature-item d-flex align-items-center">
                <div className="icon-box rounded-20 icon-box-secondary d-flex justify-content-center align-items-center">
                  <img src={featureIcon2} alt="feature-icon" />
                </div>
                <div className="info">
                  <h4 className="feature-title">Pro Guard IT Services</h4>
                  <p>Our mission is there are many variations of passages Lorem Ipsum available</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="feature-item d-flex align-items-center">
                <div className="icon-box rounded-20 icon-box-tertiary d-flex justify-content-center align-items-center">
                  <img src={featureIcon3} alt="feature-icon" />
                </div>
                <div className="info">
                  <h4 className="feature-title">Cyber Shield Experts</h4>
                  <p>Our mission is there are many variations of passages Lorem Ipsum available</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
