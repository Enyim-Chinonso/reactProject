// import React from "react";
// import "./Contact.css";

// const Contact = () => {
//   return (
//     <section id="contact" className="container py-5">
//       <div className="text-center mb-4" style={{fontSize: 25}}>
//         <h2>Contact Me</h2>
//         <p>Feel free to reach out using the form below or through my socials!</p>
//       </div>

//       <div className="row">
//         <div className="col-md-6">
//         <form id="form"   action="https://formspree.io/f/mvgakael" method="POST">
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Your Name</label>
//               <input type="text" className="form-control" id="name" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email address</label>
//               <input type="email" className="form-control" id="email" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="message" className="form-label">Message</label>
//               <textarea className="form-control" id="message" rows="4" required></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">Send Message</button>
//           </form>
//         </div>

//
//       </div>
//     </section>
//   );
// };

// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const response = await fetch("https://formspree.io/f/mayzvklj", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setStatus("Error occurred. Check your connection.");
//     }
//   };

//   return (
//     <div className="container py-5" id="contact">
//       <h2 className="mb-4">Contact Me</h2>
//       <form   action="https://formspree.io/f/mblygpry"
//   method="POST" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label>Your Name</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label>Your Email</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label>Your Message</label>
//           <textarea
//             name="message"
//             className="form-control"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Send Message
//         </button>

//         {status && <div className="mt-3">{status}</div>}
//       </form>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mblygpry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error occurred. Check your connection.");
    }
  };

  return (
    <div className="container py-5" id="contact">
      <h1 className="mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Your Message</label>
          <textarea
            name="message"
            id="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>

      </form>
      <br />
      <div className="col-md-6 mt-4 mt-md-0">
        <h5>Email</h5>
        <p>enyimchinonso23@gmail.com</p>
        <h5>Phone</h5>
        <p>+234 810 811 1761</p>
        <h5>Socials</h5>
        <a
          href="https://www.linkedin.com/in/chinonso-enyim-1435762a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Enyim-Chinonso"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          GitHub
        </a>
        <a
          href="https://facebook.com/Chinonso Enyim"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          Facebook
        </a>
        <a
          href="https://wa.me/8108111761"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          WhatsApp
        </a>
        <a
          href="https://slack.com/Enyim Chinonso"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          Slack
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
