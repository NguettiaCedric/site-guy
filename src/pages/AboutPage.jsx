import React from 'react'
import PageHeader from '../components/PageHeader';
import About from '../components/About';
import TextSlider from '../components/TextSlider';
import WhoWeAre from '../components/WhoWeAre';
import Team from '../components/Team';
import Cta from '../components/Cta';
import Pricing from '../components/Pricing';

const AboutPage = () => {
  const breadcrumbs = [
    { label: 'Accueil ', link: '/' },
    { label: 'A propos', link: null }
  ];
  return (
    <>
      <PageHeader title="A propos" breadcrumbs={breadcrumbs} />
      <About />
      <TextSlider/>
      {/* <WhoWeAre/> */}
      {/* <Team/> */}
      <Cta/>
      {/* <Pricing extraClassName="style2"/> */}
    </>
  )
}

export default AboutPage
