import React from "react";
import "../index.css"; // Asegúrate de que los estilos están importados

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source src="/mi-video.mp4" type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
    </div>
  );
};

export default VideoBackground;
