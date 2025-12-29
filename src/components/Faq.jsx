import React, { useState, useEffect, useRef } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import faqImg1 from "../assets/images/img/Cloud computing-1.png";
import faqImg2 from "../assets/images/img/sap-b1.jpg";
import faqImg3 from "../assets/images/img/dlp.png";
import groupIcon from "../assets/images/icons/group-person-icon.svg";
import groupIcon2 from "../assets/images/icons/group-person-icon-2.svg";
import { faq } from "../data/faq";
import SectionTitle from "./SectionTitle";

const Faq = ({ extraClassName = '' }) => {
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [clientCount, setClientCount] = useState(0);

  // Conditionally select the icon
  const currentIcon = extraClassName.includes('style2') ? groupIcon2 : groupIcon;

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
      setTimeout(() => {
        setClientCount(7); // Set the actual client count
      }, 500);
    }
  }, [isVisible]);

  return (
    <section className={`ep-faq-section pt-120 ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionTitle subTitle="FAQ" title="Empowering Progress Through Technology" extraClass="mb-30" />
            <div className="faq-body">
              <div className="accordion" id="accordionExample">
                {faq.map((item, index) => (
                  <div className="accordion-item" key={item.id}>
                    <div className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className={`accordion-button ${index === 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.id}`}
                        aria-expanded={index === 0 ? 'true' : 'false'}
                        aria-controls={`collapse${item.id}`}
                      >
                        {item.id}. {item.question}
                      </button>
                    </div>
                    <div
                      id={`collapse${item.id}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-images">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="single-img rounded-20 overflow-hidden">
                    <img loading="lazy" src={faqImg1} alt="faq-img" className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="single-img rounded-20 overflow-hidden">
                    <img loading="lazy" src={faqImg2} alt="faq-img" className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="single-img rounded-20 overflow-hidden">
                    <img loading="lazy" src={faqImg3} alt="faq-img" className="img-fluid w-100" />
                  </div>
                </div>
                {/* <div className="col-lg-6 col-sm-6">
                  <div className="clients rounded-20 text-center d-flex align-items-center justify-content-center flex-column" ref={counterRef}>
                    <img src={currentIcon} alt="group-person-icon" />
                    <div className="client-number d-flex align-items-center justify-content-center">
                      <Odometer value={clientCount} format="d" duration={1000} /> k+
                    </div>
                    <h5 className="trust">Trusted Clients</h5>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
