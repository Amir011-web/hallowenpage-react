import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import VideoBackground from './components/VideoBackground';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VideoBackground /> {/* 🔹 Agregamos el video SIN cambiar nada más */}
    <App />
  </React.StrictMode>,
)
