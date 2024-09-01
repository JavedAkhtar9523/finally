// import React, { useState } from "react";

// const CommentSection = ({ comments, onComment }) => {
//   const [newComment, setNewComment] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newComment.trim()) {
//       onComment(newComment);
//       setNewComment("");
//     }
//   };

//   return (
//     <div className="comment-section">
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={index}>{comment}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Add a comment..."
//         />
//         <button type="submit">Post</button>
//       </form>
//     </div>
//   );
// };

// export default CommentSection;

import React, { useState } from "react";
import './real.css';
const CommentSection = ({ isOpen, comments, onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`comment-section ${isOpen ? "open" : ""}`}>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CommentSection;
