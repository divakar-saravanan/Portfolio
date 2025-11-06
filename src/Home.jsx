import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Divakar from "./assets/Divakars.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Home.css"; 

const Home = () => {
  const resumeLink = "https://drive.google.com/file/d/13kAKW-REvEHyrE3iEt0BmwVmuiDv7ABt/view?usp=sharing";
  const githubLink = "https://github.com/divakar-saravanan/divakar-saravanan.git";
  const linkedinLink = "https://www.linkedin.com/in/divakar-saravanan-395560220/";
  const mailLink = "mailto:divasaravanan2003@gmail.com";

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-overlay"></div>

        <motion.div
          className="home-text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Hi, I'm Divakar 👋</h1>
          <p>
            <b>
              MERN Stack Developer | Frontend Enthusiast <br />
              Passionate about building responsive, user-friendly web applications.
            </b>
          </p>

          <motion.button
            className="resume-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(resumeLink, "_blank")}
          >
            View My Resume
          </motion.button>

          <div className="social-container">
            <FaEnvelope onClick={() => window.open(mailLink, "_blank")} />
            <FaGithub onClick={() => window.open(githubLink, "_blank")} />
            <FaLinkedin onClick={() => window.open(linkedinLink, "_blank")} />
          </div>
        </motion.div>

        <motion.div
          className="home-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={Divakar} alt="Divakar" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
