import React from 'react';
import { Link } from 'react-router-dom';
import PageHeaderImg from '../assets/images/img/page-header-img.svg';

const PageHeader = ({ title, breadcrumbs = [] }) => {
  return (
    <section className="ep-page-header-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="header-img">
              <img src={PageHeaderImg} alt="page-header-img" />
            </div>
          </div>
          <div className="col-md-8 ms-auto">
            <div className="bread-crumb text-end">
              <h1 className="page-title">{title}</h1>
              <ul className="list-unstyled d-flex flex-wrap align-items-center justify-content-end mt-30">
                {breadcrumbs.length > 0 && breadcrumbs.map((item, index) => (
                  <li key={index}>
                    {item.link ? (
                      <Link to={item.link}>{item.label}</Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                      <i className="fa-solid fa-chevron-right"></i>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
