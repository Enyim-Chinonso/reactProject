import React from 'react'
import './index.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Contact from './Components/Contact';
import ProjectCard from './Components/ProjectCard';
import projects from './Data/Projects';
const App = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <h1 style={{ textAlign: "center" }}>My Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
      <Contact />
    </div>
  );
};


export default App;
