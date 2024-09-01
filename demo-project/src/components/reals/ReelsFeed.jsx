import React, { useState } from "react";
import ReelItem from "./ReelItem";
import reel1 from "./../../assets/reel1.mp4";
import reel2 from "./../../assets/reel2.mp4";
import './real.css';

const ReelsFeed = () => {
  const [reels, setReels] = useState([
    {
      id: 1,
      videoUrl: reel1,
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      //   videoUrl: "https://example.com/video2.mp4",
      videoUrl: reel2,
      likes: 0,
      comments: [],
    },
    {
      id: 3,
      videoUrl: reel1,
      likes: 0,
      comments: [],
    },
  ]);

  const handleLike = (id) => {
    setReels(
      reels.map((reel) =>
        reel.id === id ? { ...reel, likes: reel.likes + 1 } : reel
      )
    );
  };

  const handleComment = (id, comment) => {
    setReels(
      reels.map((reel) =>
        reel.id === id
          ? { ...reel, comments: [...reel.comments, comment] }
          : reel
      )
    );
  };

  const handleShare = (id) => {
    console.log(`Sharing reel ${id}`);
    // Implement sharing functionality
  };

  return (
    <div className="reels-container">
      {reels.map((reel) => (
        <ReelItem
          key={reel.id}
          reel={reel}
          onLike={handleLike}
          onComment={handleComment}
          onShare={handleShare}
        />
      ))}
    </div>
  );
};

export default ReelsFeed;
