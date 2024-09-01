// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
// import { newComment, clearErrors } from '../../../actions/postAction.js';
// import { NEW_COMMENT_RESET } from '../../../constant/postConstant.js';

// const CreateComment = ({ postId }) => {
//   const [comment, setComment] = useState('');
//   const dispatch = useDispatch();

//   const { success, error,loading } = useSelector((state) => state.newComment);

//   const submitCommentHandler = async (e) => {
//     e.preventDefault();
//     const myForm = new FormData();
//     myForm.set("comment", comment);
//     myForm.set("postId", postId);

//     dispatch(newComment(myForm));
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error.message || 'Something went wrong');
//       dispatch(clearErrors());
//     }

//     if (success) {
//       toast.success("Comment Submitted Successfully");
//       dispatch({ type: NEW_COMMENT_RESET });
//       setComment('');
//     }

//   }, [dispatch, success, error]);

//   return (
//     <div>
//       <form className='mt-1 w-100 bg-white p-2 d-flex gap-1' onSubmit={submitCommentHandler}>
//         <textarea
//           rows={1}
//           placeholder='Your Comment'
//           className='b-1 p-1 rounded-0 w-100 text-normal'
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           aria-label='Comment'
//         />
//         <button
//           type='submit'
//           className='btn rounded-0 border-0 btn-dark'
//           disabled={loading}
//           aria-busy={loading}
//         >
//           {loading ? 'Submitting...' : 'Comment'}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateComment;

// --------------------------------------

import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import './CreateComment.css';
import { toast } from "react-toastify";
import { newComment, clearErrors } from "../../../actions/postAction.js";
import { NEW_COMMENT_RESET } from "../../../constant/postConstant.js";
import { BsSend, BsEmojiSmileFill  } from "react-icons/bs";
import Picker from '@emoji-mart/react';
import { useOutsideClick } from "../../../utlis/useOutsideClick.js";

const CreateComment = ({ postId, parentCommentId = null, avatar }) => {
  const [comment, setComment] = useState("");
  const [emoji, setEmoji] = useState(false);
  const colonRef = useRef(null);
  const dispatch = useDispatch();

  const { success, error, loading } = useSelector((state) => state.newComment);

  const submitCommentHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("comment", comment);
    myForm.set("postId", postId);
    if (parentCommentId) {
      myForm.set("parentCommentId", parentCommentId);
    }

    dispatch(newComment(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Something went wrong");
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Comment Submitted Successfully");
      dispatch({ type: NEW_COMMENT_RESET });
      setComment("");
    }
  }, [dispatch, success, error]);

  const addEmoji = (e) => {
    const sym = e.unified.split("-");
    const codeArray = sym.map(el => "0x" + el);
    const emoji = String.fromCodePoint(...codeArray);
    setComment(prevInput => prevInput + emoji);
  };

  useOutsideClick(colonRef, () => setEmoji(false));

  return (
    <div className="comment-form-container">
      <form
        className="mt-1 w-100 bg-white p-2 d-flex gap-1 position-relative"
        onSubmit={submitCommentHandler}
      >
        <img
          src={avatar || "https://via.placeholder.com/60"}
          style={{ width: "40px", height: "40px" }}
          alt="Profile"
          className="rounded-circle"
        />
        <textarea
          rows={1}
          placeholder="Your Comment"
          className="comment-textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          aria-label="Comment"
        />
        <div className="position-relative">
          <button
            type="button"
            className="btn rounded-0 border-0 emoji-button"
            onClick={() => setEmoji(!emoji)}
            aria-label="Toggle Emoji Picker"
          >
            <BsEmojiSmileFill className="emoji-icon" />
          </button>
          {emoji && (
            <div className="emoji-container">
              <Picker onEmojiSelect={addEmoji} />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-comment"
          disabled={loading}
          aria-busy={loading}
          aria-label="Send Comment"
        >
          <BsSend  className="send-icon"/>
        </button>
      </form>
    </div>
  );
};

export default CreateComment;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// // import { newComment } from "../../actions/postAction.js";
// import { toast } from "react-toastify";
// import { newComment } from "../../../actions/postAction.js";

// function CreateComment({ postId, onNewComment }) {
//   const [commentText, setCommentText] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (commentText.trim() === "") return;

//     const newCommentData = {
//       text: commentText,
//       postId,
//     };

//     try {
//       const response = await dispatch(newComment(newCommentData));
//       onNewComment(response); // Notify parent of the new comment
//       setCommentText("");
//       toast.success("Comment posted successfully!");
//     } catch (error) {
//       toast.error("Failed to post comment");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <textarea
//         value={commentText}
//         onChange={(e) => setCommentText(e.target.value)}
//         placeholder="Write a comment..."
//         rows="3"
//         style={{ width: "100%", padding: "8px", marginTop: "8px" }}
//       />
//       <button type="submit" className="btn btn-primary mt-2">
//         Post Comment
//       </button>
//     </form>
//   );
// }

// export default CreateComment;
