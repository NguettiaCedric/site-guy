import React from 'react'
import rotateImg from '../assets/images/banner/banner-2-btn-img.svg';
import bannerImg from '../assets/images/banner/banner-img-2.png';
import bannerShape2 from '../assets/images/banner/banner-shape-2.svg';
import bannerShape3 from '../assets/images/banner/banner-shape-3.svg';
import bannerShape4 from '../assets/images/banner/banner-shape-4.svg';
import VideoModal from '../components/VideoModal';
import "react-modal-video/css/modal-video.css";
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
const BannerTwo = () => {
  return (
    <section className="ep-banner-section-two">
      <div className="banner-main position-relative">
        <img className="banner-shape-4 position-absolute" src={bannerShape4} alt="banner-shape-4" />
        <div className="container">
          <div className="row banner-row">
            <div className="col-lg-5 align-self-center">
              <div className="banner-text position-relative">
                <motion.h1
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="banner-title">Make a <span className="d-lg-block">big impact</span> with IT
                </motion.h1>
                <motion.p
                  variants={fadeIn("left", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                >lorem ipsum dolor sit amet consectetur. Facilisi cursus vulputate vestibulum etiam rhoncus </motion.p>
                <motion.div
                  variants={fadeIn("left", 0.7)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="rotate-img custom-wrapper-hover custom-inner-hover d-flex justify-content-center align-items-center text-center">
                  <img src={rotateImg} alt="about-video-text-white" />
                  <VideoModal buttonClass="video-rotate-btn border-0 vidplay position-absolute top-50 start-50 translate-middle" />
                </motion.div>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="banner-image custom-inner-hover ps-lg-5 position-relative">
                <motion.div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                >
                <img loading="lazy" src={bannerImg} alt="banner-img-2" className="img-fluid w-100" />
                </motion.div>
                <img className="banner-shape-2 position-absolute" src={bannerShape2}
                  alt="banner-shape-2" />
                <img className="banner-shape-3 position-absolute" src={bannerShape3}
                  alt="banner-shape-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerTwo
