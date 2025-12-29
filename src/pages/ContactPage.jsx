import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SimpleReactValidator from 'simple-react-validator';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from 'framer-motion';
import { fadeIn } from '../components/variants';
const ContactPage = () => {
  const [forms, setForms] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [validator] = useState(new SimpleReactValidator({
    className: 'errorMessage'
  }));

  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();

      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Clear form fields after successful submission
      setForms({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
    } else {
      validator.showMessages();
    }
  };

  const breadcrumbs = [
    { label: 'Contact', link: '/' },
    { label: 'Contactez-nous', link: null }
  ];

  return (
    <>
      <PageHeader title="contactez-nous" breadcrumbs={breadcrumbs} />
      <section className="ep-contact-section pt-120">
        <div className="container">
          <div className="contact-information">
            {/* Static Information like Phone, Email, Location */}
            <div className="row">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Cel</h4>
                    <ul className="list-unstyled">
                      <li><a href="tel:(480)555-0103">(+225) 00-00-00-00-00</a></li>
                      <li><a href="tel:(480)555-0103">(+225) 00-00-00-00-00</a></li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Email</h4>
                    <ul className="list-unstyled">
                      <li><a href="mailto:info@gmail.com">info@gmail.com</a></li>
                      {/* <li><a href="mailto:example@example.com">example@example.com</a></li> */}
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="col-lg-6 col-xl-4">
                <div className="info-item d-flex align-items-center rounded-20 gap-4">
                  <div className="icon section-bg rounded-pill flex-shrink-0 d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="text">
                    <h4 className="title">Location</h4>
                    <ul className="list-unstyled">
                      <li>Côte D'Ivoire, Abidjan Cocody</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="contact-form position-relative section-bg">
            <h2 className="title text-center">Contactez-nous</h2>
            <form onSubmit={submitHandler}>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="input-group">
                    <input required
                      type="text"
                      name="name"
                      value={forms.name}
                      onBlur={changeHandler}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                      placeholder="Nom"
                    />
                    {validator.message('name', forms.name, 'required|alpha_space')}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-group">
                    <input required
                      type="email"
                      name="email"
                      value={forms.email}
                      onBlur={changeHandler}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                      placeholder="Email"
                    />
                    {validator.message('email', forms.email, 'required|email')}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-group">
                    <input required
                      type="phone"
                      name="phone"
                      value={forms.phone}
                      onBlur={changeHandler}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                      placeholder="Tel"
                    />
                    {validator.message('phone', forms.phone, 'required|phone')}
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="input-group">
                    <select
                      name="subject"
                      value={forms.subject}
                      onBlur={changeHandler}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                    >
                      <option value="" disabled>Subject</option>
                      <option value="Support">Support</option>
                      <option value="Sales">Sales</option>
                      <option value="General">General</option>
                    </select>
                    {validator.message('subject', forms.subject, 'required')}
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <div className="input-group">
                    <textarea
                      name="message"
                      value={forms.message}
                      onBlur={changeHandler}
                      onChange={changeHandler}
                      className="form-field textarea-control"
                      placeholder="Message ..."
                    ></textarea>
                    {validator.message('message', forms.message, 'required')}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="text-center">
                    <button type="submit" className="theme-btn position-relative">
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280012016!2d-74.14448732737499!3d40.69763123331177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1727346263569!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </section>

      {/* ToastContainer for Toastify notifications */}
      <ToastContainer />
    </>
  );
};

export default ContactPage;
