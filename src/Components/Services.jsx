import React from "react";

const list = [
  "Landing pages",
  "Website Development",
  "E-commerce websites",
  "Hospitality websites",
  "Educational websites",
  "Business website",
  "Trading and Forex websites",
  "UI/UX Optimization",
  "Web performance, maintenance and improvement etc.",
];
const Services = () => {
  return (
     <section id='services' style={{fontSize: 25}} className="container py-5">
      <div className="row align-items-center">
        <h1>Services</h1>
      <ul>
        {list.map((list, index) => (
          <li key={index}> {list} </li>
        ))}
        
      </ul>
      </div>
      </section>
  );
};

export default Services;
