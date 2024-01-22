// VideoPlayer.jsx

import React, { useRef } from 'react';
import { useLocation } from "react-router-dom";

const VideoPlayer = ({ videoUrl }) => {
  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("user")); // JSON.parse ile objeye çeviriyoruz
  const videoRef = useRef(null);

  const playPauseHandler = () => {
    const video = videoRef.current;
    video.paused ? video.play() : video.pause();
  };

  const muteUnmuteHandler = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
  };

  const videoSilHandler = () => {
    // Burada videoyu silmek için gerekli işlemleri yapabilirsiniz
    console.log('Video silme işlemi gerçekleşiyor...');
    console.log('Kullanıcının rolü:', user.role);
  };

  return (
    <div className="video-player">
      <video ref={videoRef} controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="controls">
        <button onClick={playPauseHandler}>Oynat/Duraklat</button>
        <button onClick={muteUnmuteHandler}>Sesi Aç/Kapat</button>
        {user.role === 'editor' && (
          <button onClick={videoSilHandler} className="video-sil-btn">Video kaydını sil</button>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;

