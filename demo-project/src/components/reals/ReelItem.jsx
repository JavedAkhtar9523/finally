// import React from "react";
// import VideoPlayer from "./VideoPlayer";
// import InteractionBar from "./InteractionBar";
// import CommentSection from "./CommentSection";

// const ReelItem = ({ reel, onLike, onComment, onShare }) => {
//   return (
//     <div className="reel-item">
//       <VideoPlayer videoUrl={reel.videoUrl} />
//       <InteractionBar
//         likes={reel.likes}
//         onLike={() => onLike(reel.id)}
//         onShare={() => onShare(reel.id)}
//       />
//       <CommentSection
//         comments={reel.comments}
//         onComment={(comment) => onComment(reel.id, comment)}
//       />
//     </div>
//   );
// };

// export default ReelItem;

import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import InteractionBar from "./InteractionBar";
import CommentSection from "./CommentSection";
import './real.css';

const ReelItem = ({ reel }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };

  const handleComment = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  const handleShare = () => {
    // Implement share functionality
    console.log("Shared");
  };

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="reel-item ">
      <VideoPlayer videoUrl={reel.videoUrl} />
      <InteractionBar
        likes={likes}
        comments={comments.length}
        onLike={handleLike}
        onComment={handleComment}
        onShare={handleShare}
        isLiked={isLiked}
      />
      <CommentSection
        isOpen={isCommentOpen}
        comments={comments}
        onAddComment={addComment}
      />
    </div>
  );
};

export default ReelItem;
