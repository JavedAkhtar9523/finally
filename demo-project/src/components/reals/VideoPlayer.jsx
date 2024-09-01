import React, { useState, useRef, useEffect } from "react";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import './real.css';
const VideoPlayer = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleSoundToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const handleScroll = () => {
    if (videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!isVisible && !videoRef.current.paused) {
        videoRef.current.pause();
        videoRef.current.muted = true;
        setIsPlaying(false);
        setIsMuted(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="video-player-container" onClick={handleVideoClick}>
      <video
        ref={videoRef}
        src={videoUrl}
        className="video-player"
        autoPlay
        loop
        muted={isMuted}
      />
      <div className="play-pause-icon">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </div>
      <div className="sound-icon" onClick={handleSoundToggle}>
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </div>
    </div>
  );
};

export default VideoPlayer;

// // ------------------------

// // import React, { useState, useRef, useEffect } from "react";
// // import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

// // const VideoPlayer = ({ videoUrl }) => {
// //   const [isPlaying, setIsPlaying] = useState(true);
// //   const [isMuted, setIsMuted] = useState(true); // Start with muted sound
// //   const videoRef = useRef(null);

// //   const handleVideoClick = () => {
// //     if (isPlaying) {
// //       videoRef.current.pause();
// //     } else {
// //       videoRef.current.play();
// //     }
// //     setIsPlaying(!isPlaying);
// //   };

// //   const handleSoundToggle = () => {
// //     videoRef.current.muted = !isMuted;
// //     setIsMuted(!isMuted);
// //   };

// //   const handleScroll = () => {
// //     if (videoRef.current) {
// //       const rect = videoRef.current.getBoundingClientRect();
// //       const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

// //       if (!isVisible) {
// //         videoRef.current.muted = true;
// //         setIsMuted(true);
// //       }
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <div className="video-player-container">
// //       <video
// //         ref={videoRef}
// //         src={videoUrl}
// //         className="video-player"
// //         autoPlay
// //         loop
// //         muted={isMuted} // Initially muted
// //       />
// //       <div className="play-pause-icon" onClick={handleVideoClick}>
// //         {isPlaying ? <FaPause /> : <FaPlay />}
// //       </div>
// //       <div className="sound-icon" onClick={handleSoundToggle}>
// //         {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
// //       </div>
// //     </div>
// //   );
// // };

// // export default VideoPlayer;

// import React, { useState, useRef, useEffect } from "react";
// import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

// const VideoPlayer = ({ videoUrl }) => {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true); // Start with muted sound
//   const videoRef = useRef(null);

//   const handleVideoClick = () => {
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleSoundToggle = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const handleScroll = () => {
//     if (videoRef.current) {
//       const rect = videoRef.current.getBoundingClientRect();
//       const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

//       if (!isVisible && !videoRef.current.paused) {
//         videoRef.current.pause();
//         videoRef.current.muted = true;
//         setIsPlaying(false);
//         setIsMuted(true);
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (isPlaying) {
//       videoRef.current.play();
//     } else {
//       videoRef.current.pause();
//     }
//   }, [isPlaying]);

//   return (
//     <div className="video-player-container">
//       <video
//         ref={videoRef}
//         src={videoUrl}
//         className="video-player"
//         autoPlay
//         loop
//         muted={isMuted} // Initially muted
//       />
//       <div className="play-pause-icon" onClick={handleVideoClick}>
//         {isPlaying ? <FaPause /> : <FaPlay />}
//       </div>
//       <div className="sound-icon" onClick={handleSoundToggle}>
//         {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;

// import React, { useState, useRef, useEffect } from "react";
// import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

// const VideoPlayer = ({ videoUrl }) => {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true); // Start with muted sound
//   const videoRef = useRef(null);

//   const handleVideoClick = () => {
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleSoundToggle = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const handleScroll = () => {
//     if (videoRef.current) {
//       const rect = videoRef.current.getBoundingClientRect();
//       const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

//       if (!isVisible && !videoRef.current.paused) {
//         videoRef.current.pause();
//         videoRef.current.muted = true;
//         setIsPlaying(false);
//         setIsMuted(true);
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (isPlaying) {
//       videoRef.current.play();
//     } else {
//       videoRef.current.pause();
//     }
//   }, [isPlaying]);

//   return (
//     <div className="video-player-container">
//       <video
//         ref={videoRef}
//         src={videoUrl}
//         className="video-player"
//         autoPlay
//         loop
//         muted={isMuted} // Initially muted
//       />
//       <div className="play-pause-icon" onClick={handleVideoClick}>
//         {isPlaying ? <FaPause /> : <FaPlay />}
//       </div>
//       <div className="sound-icon" onClick={handleSoundToggle}>
//         {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
