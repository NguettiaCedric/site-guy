import React from 'react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom';
import projectBanners from '../assets/images/projects/cloud-hebergement-banner.png';
import arrowIcon from '../assets/images/icons/icon-right-arrow.svg';
import projectInerImg1 from '../assets/images/projects/project-detail-inner-img-1.png';
import projectInerImg2 from '../assets/images/projects/project-detail-inner-img-2.png';

const DeveloppementDetailsPage = () => {
  const breadcrumbs = [
    { label: 'Accueil', link: '/' },
    // { label: 'Projects', link: '/Projects' },
    { label: 'Développement Web & Mobile', link: null }
  ];

  return (
    <>
      <PageHeader title="Développement Web & Mobile" breadcrumbs={breadcrumbs} />
      <section className="ep-project-details-section pt-120">
        <div className="container">
          <div className="project-banner-image position-relative">
            <div className="reveal zoom-out overflow-hidden rounded-20">
              <img loading="lazy" src={projectBanners} alt="project-details-banner"
                className="img-fluid w-100" />
            </div>
            
          </div>
          <div className="project-description">
            <h3 className="title split-text right">Développement Web & Mobile</h3>
            <p>Cybersecurity is a crucial aspect of IT, protecting sensitive information threats and breaches. IT services
              also include technical support and maintenance, ensuring that systems run smoothly and efficiently. IT
              industry offers diverse career opportunities, from network administration to software development As
              technology continues to evolve, the importance of IT in shaping the future of businesses and society</p>
            <p>Cloud computing, artificial intelligence, an cybersecurity are among the critical areas within IT that have
              transformed how businesses operate. IT solutions streamline processes, enhance communication, and improve
              decision-making by providing real-time data and analytics. Cybersecurity</p>

            <div className="inner-options">
              <ul className="list-unstyled">
                <li><img src={arrowIcon} alt="icon-right-arrow" /> Inno Secure Technologies</li>
                <li><img src={arrowIcon} alt="icon-right-arrow" /> Empowering Your Digital
                  Future</li>
                <li><img src={arrowIcon} alt="icon-right-arrow" /> Unlocking the Power of
                  Technology</li>
                <li><img src={arrowIcon} alt="icon-right-arrow" /> Technology that Moves You
                  Forward</li>
              </ul>
            </div>
            <div className="inner-image mb-30">
              <div className="row">
                <div className="col-lg-6">
                  <div className="image rounded-20 overflow-hidden reveal right">
                    <img loading="lazy" src={projectInerImg1} alt="project-detail-inner-img"
                      className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="image rounded-20 overflow-hidden reveal right">
                    <img loading="lazy" src={projectInerImg2} alt="project-detail-inner-img"
                      className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <h3 className="title split-text right">Building Tomorrow’s Tech Today</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galltype and
                  scrambled it to make a type specimen book</p>
              </div>
            </div>
            <div className="list-info mt-30">
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="info-item">
                    <h4 className="info-title d-flex align-items-center">
                      <i className="fa-solid fa-check"></i>
                      Your Gateway to Innovation
                    </h4>
                    <p>The rapid advancement of technology continuously</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="info-item">
                    <h4 className="info-title d-flex align-items-center">
                      <i className="fa-solid fa-check"></i>
                      Engineering the Future of IT
                    </h4>
                    <p>The rapid advancement of technology continuously</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="info-item">
                    <h4 className="info-title d-flex align-items-center">
                      <i className="fa-solid fa-check"></i>
                      Innovate with Confidence
                    </h4>
                    <p>The rapid advancement of technology continuously</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DeveloppementDetailsPage
