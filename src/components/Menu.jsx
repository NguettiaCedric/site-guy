import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ul className="navbar-nav mx-auto mb-lg-0">

      <li className="nav-item">
        <Link className="nav-link" to="/">
          Accueil
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">
          Accueil <i className="fas fa-chevron-down"></i>
        </Link>
        <ul className="sub-menu list-unstyled">
          <li>
            <Link to="/">Home One</Link>
          </li>
          <li>
            <Link to="/home-two">Home Two</Link>
          </li>
        </ul>
      </li> */}
    
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          A propos
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">
          Services <i className="fas fa-chevron-down"></i>
        </Link>
        <ul className="sub-menu list-unstyled">
          <li>
            <Link to="/cloud-hebergement">Cloud & Hebergement</Link>
          </li>
          <li>
            <Link to="/sauvegarde-restauration">Sauvegarde & Restauration</Link>
          </li>
          <li>
            <Link to="/supervision-monitoring">Supervision & Monitoring</Link>
          </li>
          <li>
            <Link to="/cybersecurite">Cybersecurité</Link>
          </li>
          <li>
            <Link to="/developpement-web-mobile">Développement web & mobile</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">
          Solutions <i className="fas fa-chevron-down"></i>
        </Link>
        <ul className="sub-menu list-unstyled">
          <li>
            <Link to="/sap-business-one">SAP Business One</Link>
          </li>
          <li>
            <Link to="/microsoft-azure">Microsoft Azure</Link>
          </li>
          <li>
            <Link to="/veeam">VEEAM</Link>
          </li>
          <li>
            <Link to="/dlp">DLP</Link>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/projets">
          Projets 
        </Link>
      </li>

      {/* <li className="nav-item">
        <Link className="nav-link" to="#">
          Projects <i className="fas fa-chevron-down"></i>
        </Link>
        <ul className="sub-menu list-unstyled">
          <li>
            <Link to="/projects">Project Single</Link>
          </li>
          <li>
            <Link to="/project-details">Project Details</Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="nav-item">
        <Link className="nav-link" to="#">
          Blog <i className="fas fa-chevron-down"></i>
        </Link>
        <ul className="sub-menu list-unstyled">
          <li>
            <Link to="/blog">Blog Single</Link>
          </li>
          <li>
            <Link to="/blog-details">Blog Details</Link>
          </li>
        </ul>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Menu
