import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeOneLayout from "./components/HomeOneLayout";
import HomeTwoLayout from "./components/HomeTwoLayout";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import HomeTwo from "./pages/HomeTwo";
import ScrollToTop from "./components/ScrollToTop";
import Error404 from "./pages/Error404";
import CloudHebergementDetailsPage from "./pages/CloudHebergementDetailsPage";
import SauvegardeRestaurationDetailsPage from "./pages/SauvegardeRestaurationDetailsPage";
import DeveloppementDetailsPage from "./pages/DeveloppementDetailsPage";
import SupervisionMonitoringDetailsPage from "./pages/SupervisionMonitoringDetailsPage";
import CyberSecuriteDetailsPage from "./pages/CyberSecuriteDetailsPage";
import SapBusinessOneDetailsPage from "./pages/SapBusinessOneDetailsPage";
import MicrosoftAzureDetailsPage from "./pages/MicrosoftAzureDetailsPage";
import VeeamDetailsPage from "./pages/VeeamDetailsPage";
import DlpDetailsPage from "./pages/DlpDetailsPage";

const BodyClassHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const homePages = ["/", "/home-two"];

    if (homePages.includes(location.pathname)) {
      document.body.classList.add("section-bg");
    } else {
      document.body.classList.remove("section-bg");
    }

    return () => {
      document.body.classList.remove("section-bg");
    };
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BodyClassHandler />
      <Routes>
        {/* Home One */}
        <Route path="/" element={<HomeOneLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="service-details" element={<ServiceDetailsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="project-details" element={<ProjectDetailsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-details" element={<BlogDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cloud-hebergement" element={<CloudHebergementDetailsPage />} />
          <Route path="cybersecurite" element={<CyberSecuriteDetailsPage />} />
          <Route path="sauvegarde-restauration" element={<SauvegardeRestaurationDetailsPage />}/>  {/*service-details*/}
          <Route path="developpement-web-mobile" element={<DeveloppementDetailsPage />} />
          <Route path="supervision-monitoring" element={<SupervisionMonitoringDetailsPage />} />
          <Route path="sap-business-one" element={<SapBusinessOneDetailsPage />} />
          <Route path="microsoft-azure" element={<MicrosoftAzureDetailsPage />} />
          <Route path="veeam" element={<VeeamDetailsPage />} />
          <Route path="dlp" element={<DlpDetailsPage />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        {/* Home Two */}
        <Route path="home-two" element={<HomeTwoLayout />}>
          <Route index element={<HomeTwo />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="service-details" element={<ServiceDetailsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="project-details" element={<ProjectDetailsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-details" element={<BlogDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
