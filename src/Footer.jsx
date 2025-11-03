import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#0b1120",
    color: "#d1d5db",
    textAlign: "center",
    padding: "40px 20px",
    fontFamily: "Poppins, sans-serif",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  };

  const iconContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    marginBottom: "15px",
  };

  const iconStyle = {
    fontSize: "1.8rem",
    color: "#a5b4fc",
    cursor: "pointer",
    transition: "transform 0.3s ease, color 0.3s ease",
  };

  const textStyle = {
    fontSize: "0.9rem",
    color: "#9ca3af",
  };

  const iconHover = (e, enter) => {
    if (enter) {
      e.target.style.color = "#60a5fa";
      e.target.style.transform = "scale(1.2)";
    } else {
      e.target.style.color = "#a5b4fc";
      e.target.style.transform = "scale(1)";
    }
  };

  return (
    <div> 
        <Footer/>
        
        <motion.footer
      style={footerStyle}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div style={iconContainer}>
        <FaGithub
          style={iconStyle}
          onMouseEnter={(e) => iconHover(e, true)}
          onMouseLeave={(e) => iconHover(e, false)}
          onClick={() => window.open("https://github.com/yourgithub", "_blank")}
        />
        <FaLinkedin
          style={iconStyle}
          onMouseEnter={(e) => iconHover(e, true)}
          onMouseLeave={(e) => iconHover(e, false)}
          onClick={() =>
            window.open("https://linkedin.com/in/yourlinkedin", "_blank")
          }
        />
        <FaEnvelope
          style={iconStyle}
          onMouseEnter={(e) => iconHover(e, true)}
          onMouseLeave={(e) => iconHover(e, false)}
          onClick={() => (window.location.href = "mailto:youremail@gmail.com")}
        />
      </div>

      <p style={textStyle}>
        © {new Date().getFullYear()} Divakar Saravanan. All Rights Reserved.
      </p>
    </motion.footer>
        
</div>
 
  );
};

export default Footer;