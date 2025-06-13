import React from "react";

const ProjectCard = ({ title, description, image, tech, live, github }) => {
  return (
    <div id="projects" style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "16px",
      marginBottom: "20px",
    }}>
      <img src={image} alt={title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        {tech.map((t, i) => (
          <span key={i} style={{ marginRight: "10px", fontSize: "12px", background: "#eee", padding: "2px 6px", borderRadius: "4px" }}>{t}</span>
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        <a href={live} target="_blank" rel="noopener noreferrer" style={{ marginRight: "15px" }}>Live Demo</a>
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default ProjectCard;
