import React from "react";
import "./Clip.css"; 
const Clip = ({ title, description, start, source }) => {
  return (
    <div className="clip-card">
      <div className="clip-video">
        <video controls>
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="clip-details">
        <h3 className="clip-title">{title}</h3>
        <p className="clip-description">{description}</p>
        <img src={start} alt="Rating" className="clip-rating" />
      </div>
    </div>
  );
};

export default Clip;
