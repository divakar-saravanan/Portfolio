import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Divakar from "../public/Divakars.jpeg"; 
import { FaGithub, FaLinkedin, FaEnvelope, FaAlignLeft } from "react-icons/fa";

const Home = () => {
  const container = {
    backgroundImage: "url('/bg.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 80px",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
    overflow: "hidden",
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

  const textSection = {
    flex: 1,
    zIndex: 2,
  };

  const imageSection = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  };

  const imageStyle = {
    width: "290px",
    height: "auto",
    borderRadius: "50%",
    boxShadow: "0 0 40px rgba(127, 90, 240, 0.6)",
  };

  const heading = {
    fontSize: "55px",
    fontWeight: "700",
    marginBottom: "10px",
  };

  const paragraph = {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#cfcfcf",
    marginBottom: "30px",
  };

  const resumeButton = {
    background: "linear-gradient(90deg, #7f5af0, #2cb67d)",
    border: "none",
    color: "white",
    padding: "15px 35px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
    marginBottom: "20px",
  };

  const socialContainer = {
    display: "flex",
    gap: "20px",
    fontSize: "28px",
    color: "white",
    FaAlignLeft:"60px"
    
  };

 
  const resumeLink = "https://drive.google.com/file/d/13kAKW-REvEHyrE3iEt0BmwVmuiDv7ABt/view?usp=sharing";
  const githubLink = "https://github.com/yourusername";
  const linkedinLink = "https://www.linkedin.com/in/yourusername/";
  const mailLink = "mailto:yourmail@example.com";

  return (
    <div>
      <Navbar />
      <div style={container}>
        <div style={overlay}></div>

        <motion.div
          style={textSection}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 style={heading}>Hi, I'm Divakar 👋</h1>
          <p style={paragraph}>
            <b>
              MERN Stack Developer | Frontend Enthusiast <br />
              Passionate about building responsive, user-friendly web
              applications.
            </b>
          </p>

          <motion.button
            style={resumeButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(resumeLink, "_blank")}
          >
            View My Resume
          </motion.button>

       
          <div style={socialContainer}>
            <FaEnvelope
              style={{ cursor: "pointer" }}
              onClick={() => window.open(mailLink, "_blank")}
            />
            <FaGithub
              style={{ cursor: "pointer" }}
              onClick={() => window.open(githubLink, "_blank")}
            />
            <FaLinkedin
              style={{ cursor: "pointer" }}
              onClick={() => window.open(linkedinLink, "_blank")}
            />
          </div>
        </motion.div>

        <motion.div
          style={imageSection}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={Divakar} alt="Divakar" style={imageStyle} />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;