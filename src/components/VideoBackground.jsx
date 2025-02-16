import React from "react";
import videoSrc from "../assets/img/mi-video.mp4"; // Importa el video desde src
import "../index.css"; // Asegúrate de que los estilos están importados

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
    </div>
  );
};

export default VideoBackground;
