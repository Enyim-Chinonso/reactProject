import React from "react";
import "./Hero.css";
import Chinonso from "../assets/chinonso-photo.jpg";

const Hero = () => {
  return (
    <div id="home" className="container py-5 mt-5 hero-background    ">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-9 ">
            Hi, I'm Enyim Chinonso (Frontend Developer). <br />  Welcome to my Online
            Portfolio website.
          </h1>
          {/* <h1 className="display-4 ">
            {" "}
            Hi, I'm Enyim Chinonso <br />
            (Frontend Developer) <br /> Welcome to my Online Portfolio website.{" "}
            <br />
          </h1> */}

          <p className="lead">
            I build, design and maintain scalable and secured web applications
            using HTML, CSS, BOOTSTRAP, JAVASCRIPT, <br /> REACT etc.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <a href="#contact" className="btn btn-outline-primary btn-lg">
              Let's Talk
            </a>
            <a href="#contact" className="btn btn-outline-primary btn-lg">
              Hire Me
            </a>
          </div>
        </div>
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={Chinonso}
            alt="Hero image"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "350px", marginLeft: "3rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";
// import "./Hero.css";
// import Chinonso from "../assets/chinonso-photo.jpg";

// const Hero = () => {
//   return (
//     <section id="home" className="hero-section py-5">
//       <div className="container">
//         <div className="row align-items-center flex-column-reverse flex-md-row">
//           {/* Left Content */}
//           <div className="col-md-6 text-center text-md-start">
//             <h1 className="fw-bold display-5 mb-3">
//               Hi, I'm <span className="text-primary">Enyim Chinonso</span>
//             </h1>
//             <h4 className="text-muted mb-3">Frontend Developer</h4>
//             <p className="lead text-secondary">
//               I build and maintain scalable, responsive web applications using
//               HTML, CSS, Bootstrap, JavaScript, React, and more.
//             </p>
//             <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
//               <a href="#contact" className="btn btn-primary btn-lg px-4">
//                 Let's Talk
//               </a>
//               <a href="#contact" className="btn btn-outline-secondary btn-lg px-4">
//                 Hire Me
//               </a>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="col-md-6 text-center mb-4 mb-md-0">
//             <img
//               src={Chinonso}
//               alt="Chinonso profile"
//               className="img-fluid rounded-circle shadow"
//               style={{ maxWidth: "320px", height: "auto" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React from "react";
// import "./Hero.css";
// import Chinonso from "../assets/chinonso-photo.jpg";

// const Hero = () => {
//   return (
//     <section id="home" className="hero-section py-5">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Text Section */}
//           <div className="col-md-6 mb-4 mb-md-0">
//             <h1 className="display-4 fw-bold">
//               Hi, I'm <span className="text-primary">Enyim Chinonso</span>
//             </h1>
//             <h5 className="text-muted mb-3">Frontend Developer</h5>
//             <p className="lead text-secondary">
//               I build, design, and maintain scalable and responsive web
//               applications using HTML, CSS, Bootstrap, JavaScript, React, and more.
//             </p>
//             <div className="mt-4 d-flex gap-3">
//               <a href="#contact" className="btn btn-primary btn-lg px-4">
//                 Let's Talk
//               </a>
//               <a href="#contact" className="btn btn-outline-dark btn-lg px-4">
//                 Hire Me
//               </a>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="col-md-6 text-center">
//             <img
//               src={Chinonso}
//               alt="Chinonso"
//               className="img-fluid shadow"
//               style={{ maxHeight: "400px", borderRadius: "12px", objectFit: "cover" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
