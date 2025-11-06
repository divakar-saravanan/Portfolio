import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const About = () => {
  const container = {
    position: "relative",
    minHeight: "100vh",
    background: "url('/bg.jpg') center/cover no-repeat fixed",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    padding: "30px 120px",
  };

  const overlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", 
    zIndex: 1,
  };

  const content = {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px",
    margin: "0 auto",
  };

  const title = {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "30px",
    textAlign: "center",
  };

  const underlineStyle = {
    height: "4px",
    width: "60px",
    background:
      "linear-gradient(90deg, rgba(92,62,255,1) 0%, rgba(0,255,255,1) 100%)",
    borderRadius: "4px",
    margin: "10px auto",
  };

  const paragraph = {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#cfcfcf",
    marginBottom: "25px",
    textAlign: "justify",
  };

  const highlight = {
    color: "#2cb67d",
    fontWeight: "600",
  };

  return (
    <div>
      <Navbar />

      <motion.div
        style={container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={overlay}></div> 

        <motion.div
          style={content}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 style={title}>About Me</h2>
          <div style={underlineStyle}></div>

          <p style={paragraph}>
            I'm an aspiring <span style={highlight}>Frontend Developer</span> trained in the{" "}
            <span style={highlight}>MERN Stack</span> (MongoDB, Express.js, React.js, and Node.js),
            with a strong background in <span style={highlight}>Business Administration</span>.
            My journey into web development began with a passion for creativity and technology.
            I enjoy transforming ideas into real-world digital experiences.
          </p>

          <p style={paragraph}>
            I specialize in building <span style={highlight}>responsive</span>,{" "}
            <span style={highlight}>accessible</span>, and{" "}
            <span style={highlight}>user-friendly</span> web interfaces. I'm always eager to learn
            new technologies, contribute to meaningful projects, and solve problems using clean and
            efficient code.
          </p>

          <p style={paragraph}>
            When I'm not coding, I enjoy exploring <span style={highlight}>UI/UX design trends</span>,
            reading about <span style={highlight}>tech innovations</span>, and working on side
            projects that challenge my skills and creativity.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;