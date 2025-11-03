import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Skills = () => {
  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    background: "url('/bg.jpg') center/cover no-repeat fixed",
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
    padding: "20px 0",
    textAlign: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", 
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2, 
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "40px",
  };

  const underlineStyle = {
    height: "4px",
    width: "60px",
    background:
      "linear-gradient(90deg, rgba(92,62,255,1) 0%, rgba(0,255,255,1) 100%)",
    borderRadius: "4px",
    margin: "10px auto 40px auto",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    padding: "0 20px",
    marginBottom: "60px",
  };

  const skillCard = {
    width: "90px",
    textAlign: "center",
    transition: "transform 0.3s ease",
  };

  const iconStyle = {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  };

  const nameStyle = {
    fontSize: "0.85rem",
    color: "#d1d5db",
  };

  const subheadingStyle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginTop: "40px",
    marginBottom: "20px",
    color: "#a5b4fc",
    letterSpacing: "1px",
  };

  const skills = [
    { name: "HTML 5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS 3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "React JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Mongoose", img: "https://avatars.githubusercontent.com/u/7552965?s=200&v=4" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ];

  const tools = [
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "ChatGPT", img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    { name: "Chrome", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
    { name: "MongoDB Compass", img: "https://www.svgrepo.com/show/331488/mongodb.svg" },
  ];

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <div style={overlayStyle}></div> 
        <div style={contentStyle}>
          <h1 style={headingStyle}>Skills</h1>
          <div style={underlineStyle}></div>

          <div style={gridStyle}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                style={skillCard}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <img src={skill.img} alt={skill.name} style={iconStyle} />
                <p style={nameStyle}>{skill.name}</p>
              </motion.div>
            ))}
          </div>

      
          <h2 style={subheadingStyle}>TOOLS AND SOFTWARE</h2>
          <div style={gridStyle}>
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                style={skillCard}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <img src={tool.img} alt={tool.name} style={iconStyle} />
                <p style={nameStyle}>{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;