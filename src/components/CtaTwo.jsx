import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import CtaBg1 from '../assets/images/bg/cta-bg-1.svg';
import CtaBg2 from '../assets/images/bg/cta-bg-2.svg';

const CtaTwo = () => {
  return (
    <section className="ep-cta-section-two position-relative mt-120 z-1">
      <div className="shape">
        <img src={CtaBg1} className="cta-shape1 position-absolute top-0 start-0 z-n1" alt="cta-bg" />
        <img src={CtaBg2} className="cta-shape2 position-absolute bottom-0 end-0 z-n1" alt="cta-bg" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="cta-text text-center">
              <SectionTitle title="Next-Level IT for Next-Level Businesses" extraClass="mb-2 text-center" titleClass="text-white" />

              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="button-groups mt-40 d-flex flex-wrap justify-content-center align-items-center">
                <Link to="#" className="theme-btn signup position-relative d-inline-flex align-items-center">
                  Sign Up Today
                </Link>
                <Link to="/services"
                  className="theme-btn btn-tertiary position-relative d-inline-flex align-items-center">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaTwo
