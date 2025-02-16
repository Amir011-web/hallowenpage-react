
import React from "react";
import "../index.css"; // Importa los estilos del video
import videoSrc from "../assets/img/mi-video.mp4"; // Ajusta la ruta de tu video

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
