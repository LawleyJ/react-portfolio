import React from "react";
import ResumePDF from "../assets/Resume.pdf"

const Resume = () => {
  return (
    
      <a className="resume" href={ResumePDF} target="_blank"
                    rel="noreferrer">
                    View Full Resume &#8594;
      </a>
    
  );
};

export default Resume;