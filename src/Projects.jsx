import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Projects = () => {
  const containerStyle = {
    backgroundColor: "#0b1120",
    background: "url('/bg.jpg') center/cover no-repeat fixed",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
    padding: "60px 0",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "50px",
  };

  const underlineStyle = {
    height: "4px",
    width: "60px",
    background:
      "linear-gradient(90deg, rgba(92,62,255,1) 0%, rgba(0,255,255,1) 100%)",
    borderRadius: "4px",
    margin: "10px auto",
  };

  const projectsContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "40px",
    padding: "0 20px",
  };

  const cardStyle = {
    backgroundColor: "#111827",
    borderRadius: "20px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
    width: "340px",
    overflow: "hidden",
    textAlign: "center",
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    display: "block",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "180px",
    backgroundColor: "rgba(0,0,0,0.5)",
    opacity: 0,
    transition: "opacity 0.3s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  const overlayButtonStyle = {
    backgroundColor: "#7c3aed",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    padding: "8px 18px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background 0.3s",
  };

  const contentStyle = {
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#a5b4fc",
    marginBottom: "10px",
  };

  const lineStyle = {
    width: "40px",
    height: "3px",
    backgroundColor: "#facc15",
    margin: "0 auto 20px auto",
    borderRadius: "3px",
  };

  const descStyle = {
    fontSize: "0.9rem",
    lineHeight: "1.6",
    color: "#d1d5db",
    marginBottom: "20px",
  };

  const stackStyle = {
    fontSize: "0.85rem",
    marginBottom: "15px",
    color: "#e5e7eb",
  };

  const stackItemStyle = {
    backgroundColor: "#1f2937",
    padding: "6px 10px",
    borderRadius: "8px",
    margin: "4px",
    display: "inline-block",
    fontSize: "0.8rem",
  };

  const projects = [
    {
      image: "/Apexfit.jpg",
      title: "Apex Fitness",
      description:
        "Gym Web Application – Developed a responsive gym management platform using React and custom CSS, featuring secure user authentication, detailed membership plans, and seamless navigation. Focused on modern UI design, performance, and maintainable front-end architecture for an engaging user experience ",
      stack: ["React.js", "CSS", "Material-UI"],
      codeLink: "https://github.com/divakar-saravanan/ApexFitness-gymweb",
      liveLink: "https://apexfitnessgymeb.netlify.app/",
    },
    {
      image: "/notes.jpg",
      title: "notesTaken",
      description:
        "Notes Web Application – Developed a responsive React-based notes app with a clean, intuitive UI, featuring create/edit/delete/search functionality, real-time state updates, and reusable components for performance, accessibility, and maintainability",
      stack: ["React.js", "CSS", "Material-UI"],
      codeLink: "https://github.com/divakar-saravanan/NotesWeb/tree/main/notesapp",
      liveLink: "https://notestaken.netlify.app/",
    },
    {
      image: "/Ecommerce.png",
      title: "E-Commerce",
      description:
        "Ecommerce Web Application – E-Commerce Web Application – Developed a fully responsive online shopping platform using React.js with user authentication, cart management, and secure payment integration. Implemented a seamless shopping experience where users can browse products, add items to the cart, and place orders through a Stripe-powered checkout system. Designed reusable components, optimized state management with Context API, and ensured smooth navigation with React Router. Focused on performance, usability, and clean UI for an engaging user experience.",
      stack: ["React.js", "CSS", "Material-UI"],
      codeLink: "https://github.com/divakar-saravanan/Ecommerce",
      liveLink: "https://swiftca.netlify.app/"
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <h1 style={headingStyle}>Projects</h1>
        <div style={underlineStyle}></div>

        <div style={projectsContainer}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={cardStyle}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.6)" }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div
                style={{ position: "relative" }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector(".overlay").style.opacity = 1;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector(".overlay").style.opacity = 0;
                }}
              >
                <img src={project.image} alt={project.title} style={imageStyle} />
                <div className="overlay" style={overlayStyle}>
                  <button
                    style={overlayButtonStyle}
                    onClick={() => window.open(project.codeLink, "_blank")}
                  >
                    Code
                  </button>
                  <button
                    style={overlayButtonStyle}
                    onClick={() => window.open(project.liveLink, "_blank")}
                  >
                    Visit
                  </button>
                </div>
              </div>
              <div style={contentStyle}>
                <h2 style={titleStyle}>{project.title}</h2>
                <div style={lineStyle}></div>
                <p style={descStyle}>{project.description}</p>
                <p style={stackStyle}>
                  <b>Stack:</b>
                </p>
                {project.stack.map((tech, i) => (
                  <span key={i} style={stackItemStyle}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;