// import React from "react";
// import { FaHeart, FaComment, FaShare } from "react-icons/fa";

// const InteractionBar = ({ likes, onLike, onShare }) => {
//   return (
//     <div className="interaction-bar">
//       <button onClick={onLike}>
//         <FaHeart /> {likes}
//       </button>
//       <button>
//         <FaComment />
//       </button>
//       <button onClick={onShare}>
//         <FaShare />
//       </button>
//     </div>
//   );
// };

// export default InteractionBar;

import React from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";

import './real.css';
const InteractionBar = ({
  likes,
  comments,
  onLike,
  onComment,
  onShare,
  isLiked,
}) => {
  return (
    <div className="interaction-bar ">
      <button
        className={`interaction-button ${isLiked ? "liked" : ""}`}
        onClick={onLike}
        style={{
          backgroundColor: "transparent",
          borderRadius: "50%",         
          width: "65px",
          height: "65px",
          fontSize: "15px",
          outline: "none",
        }}>
        {
          isLiked ? <FaHeart className=" fs-3 me-2"  /> : <FaRegHeart className="fs-3 me-2 text-light " />
        }

        {/* <FaHeart className=" fs-3 me-2"  /> */}

        <p className="interaction-count">{likes}</p>

      </button>
      <button
        className="interaction-button"
        style={{
          backgroundColor: "transparent",
          
          borderRadius: "50%",
          width: "65px",
          height: "65px",
          fontSize: "15px",
          outline: "none",
        }}
        onClick={onComment} >
        <FaRegComment className="fs-3 me-2  text-light " />
        <p className="interaction-count">{comments}</p>
      </button>

      <button
        className="interaction-button"
        style={{
          backgroundColor: "trasparent",
          borderRadius: "50%",
          width: "65px",
          height: "65px",
          fontSize: "15px",
          outline: "none",
        }}
        onClick={onShare}
      >
        <FaShare className="fs-3 me-2"/>
      </button>
    </div>
  );
};

export default InteractionBar;
