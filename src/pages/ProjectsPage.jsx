import React from 'react'
import PageHeader from '../components/PageHeader';
import { projectSingle } from "../data/projects";
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const breadcrumbs = [
    { label: 'Accueil', link: '/' },
    { label: 'Projets', link: null }
  ];
  return (
    <>
      <PageHeader title="Projets" breadcrumbs={breadcrumbs} />
      <section className="ep-project-section pt-120">
      <div className="container">
        <div className="row g-4">
          {projectSingle.map((project) => (
            <div key={project.id} className="col-lg-6">
              <div className="project-item position-relative">
                <div className="img reveal zoom-out overflow-hidden rounded-20">
                  <Link to="/project-details" className="d-block w-100">
                    <img loading="lazy" src={project.image} alt="project-img" className="img-fluid w-100" />
                  </Link>
                </div>
                <div className="overlay position-absolute">
                  <div className="text">
                    <p>{project.category}</p>
                    <h4 className="title">
                      <Link to="/project-details">{project.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default ProjectsPage
