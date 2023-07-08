import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import Banner from '../Component/Banner/Banner';
import Pricing from '../Component/Pricing/Pricing';
import Work from '../Component/Work/Work';
const Project = () => {
  return (
    <div>
      <Navbar />
      <Banner heading="PROJECTS" text="Some of my most recent works" />
      <Work />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Project;
