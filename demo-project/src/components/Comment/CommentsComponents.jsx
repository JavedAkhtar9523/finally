import React, { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import "./comment.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments, addReply, getPostDetails, deleteComment, resetDeleteComment, clearErrors } from "../../actions/postAction"; 
import { NavLink, useParams } from "react-router-dom";
import { followOrUnfollowUser } from "../../actions/userActions";
//import CreateComment from "../Post/Comment/CreateComent";
import {IoIosShareAlt} from 'react-icons/io';
import {toast } from 'react-toastify';
import { dislikeComment, dislikeReply, likeComment, likeReply } from "../../actions/commentAction";
import CreateComment from "./CreateComment";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
const CommentsComponent = () => {
  const { id: postId } = useParams();
  const dispatch = useDispatch();

  const { post } = useSelector((state) => state.postDetail);
  const { loading, comments, error } = useSelector((state) => state.postComments); 
  const { success: deleteSuccess, error: deleteError } = useSelector((state) => state.commentDelete);
  const currentUser = useSelector((state) => state.user.user);
  const currentUserId = currentUser?._id;
  const [isFollowing, setIsFollowing] = useState(currentUser?.following.includes(post?.postedBy?._id));
  const [replyId, setReplyId] = useState(null);
 

  useEffect(() => {
    dispatch(getAllComments(postId));
    dispatch(getPostDetails(postId));

    if (deleteSuccess) {
      toast.success("Comment deleted successfully!");
      dispatch(resetDeleteComment());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }
  }, [dispatch, postId, deleteSuccess, deleteError]);
  const handleAddReply = (parentId, replyText) => {
    dispatch(addReply(postId, parentId, replyText));
  };
 


  const handleUpdateLikes = (commentId, type) => {
    if (type === "like") {
      dispatch(likeComment(postId, commentId))
      .then(() => {
        toast.success("Comment liked successfully!");
      });
    } else if (type === "dislike") {
      dispatch(dislikeComment(postId, commentId))
      .then(() => {
        toast.success("Comment disliked successfully!");
      });
    }
  };

  const isLiked = post?.likes?.includes(currentUserId);

  // const handleUpdateLikes = (commentId, replyId, type) => {
  //   if (replyId) {
  //     // Handle like/dislike for replies
  //     if (type === "like") {
  //       dispatch(likeReply(postId, commentId, replyId))
  //         .then(() => {
  //           toast.success("Reply liked successfully!");
  //         })
  //         .catch((error) => {
  //           toast.error(`Failed to like reply: ${error.message}`);
  //         });
  //     } else if (type === "dislike") {
  //       dispatch(dislikeReply(postId, commentId, replyId))
  //         .then(() => {
  //           toast.success("Reply disliked successfully!");
  //         })
  //         .catch((error) => {
  //           toast.error(`Failed to dislike reply: ${error.message}`);
  //         });
  //     }
  //   } else {
  //     // Handle like/dislike for comments
  //     if (type === "like") {
  //       dispatch(likeComment(postId, commentId))
  //         .then(() => {
  //           toast.success("Comment liked successfully!");
  //         })
  //         .catch((error) => {
  //           toast.error(`Failed to like comment: ${error.message}`);
  //         });
  //     } else if (type === "dislike") {
  //       dispatch(dislikeComment(postId, commentId))
  //         .then(() => {
  //           toast.success("Comment disliked successfully!");
  //         })
  //         .catch((error) => {
  //           toast.error(`Failed to dislike comment: ${error.message}`);
  //         });
  //     }
  //   }
  // };
  

  const handleDeleteComment = (commentId,replyId = null) => {
    dispatch(deleteComment(postId, commentId, replyId));
  };

  const followOrUnfollowHandler = async () => {
    await dispatch(followOrUnfollowUser(post?.postedBy?._id, isFollowing, currentUserId));
    setIsFollowing(!isFollowing);
  };

  return (
    <div className='container-fluid comment-container-layer'>
    <div className="container p-4 custom-container ">
    <NavLink to="home" className="nav-link">
      <IoCloseCircleOutline className="close-icon" />
    </NavLink>
    <div className='row d-flex justify-center align-items-center'>
    {post?.images && post?.images?.length > 0 && (
      <div className='col-5 comment-image'>
       <div className="thumbnailBox"  style={{ width: "400px", height: "70vh" }}>
       <img src={post.images[0].url}  className='border border-1 rounded-4'
        alt="Content" width="100%" height="100%" />
       </div>
       <div className="post-actions">
            <button
              className={`action-btn like-btn ${isLiked ? "liked" : ""}`}
            >
              {isLiked ? <FaHeart /> : <FaRegHeart />}
              <span className="action-count">{post?.likes?.length}</span>
            </button>

            <button
              className="action-btn comment-btn"
            >
              <FaRegComment />
              <span className="action-count">{post?.comments?.length}</span>
            </button>
            <button className="action-btn repost-btn"
            >
              <BiRepost />
              <span className="action-count">
                {post?.repostCount}
              </span>
            </button>
          </div>
      </div>
    )}

      <div className='col-6  comment-profile'>
        <div className='user-container d-flex justify-content-between ps-4 p-1'>
          <img src={post?.author?.avatar || post?.postedBy?.avatar} alt="Author" width="50" height="50" 
          className='img-fluid rounded-circle' />
          <div className="gap-0">
            <div className=" d-flex justify-content-center align-items-center gap-1">
            <h5 className="text-normal">{post?.author?.name || post?.postedBy?.name || 'Unknown Author'}</h5>
            <IoIosCheckmarkCircle className="text-primary"/>
            <span className="text-muted" style={{ fontSize: "0.8rem", fontFamily: "cursive" }}>
  {currentUser?.createdAt
    ? new Date(currentUser.createdAt).toLocaleString('en-US', {
      hour: '2-digit', 
      minute: '2-digit',
        month: 'short',   
        day: 'numeric',   
  
      })
    : ""}
</span>

            </div>
            <span class="badge rounded-pill bg-light text-secondary text-muted">
              {post?.author?.email || post?.postedBy?.email || 'Unknown Email'}</span>
            <span class="badge rounded-pill bg-light text-secondary text-muted px-2">{post?.author?.username}</span>
          </div>
          <div>
            {currentUserId === post?.postedBy?._id ? (
              <NavLink to="/me/update" className="btn-dark rounded-5 btn btn-sm">Edit Profile</NavLink>
            ) : (
              <button 
                onClick={followOrUnfollowHandler}
                className={`btn rounded-5 px-2 btn-sm ${!isFollowing ? 'btn-outline-danger' : 'btn-outline-primary'}`}
                disabled={loading}
              >
                {!isFollowing ? "Following" : "Follow"}
              </button>
            )}
          </div>
        </div>
        <div className="mt-2 comment-container ps-4">
        {post?.content && <p className='mt-2 text-muted' style={{ fontSize: "0.8rem", fontFamily: "cursive" }}>
          {post.content}</p>}
          {loading ? (
            <p>Loading comments...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <CommentsList
              comments={comments}
              addReply={handleAddReply}
              updateLikes={handleUpdateLikes}
              deleteComment={handleDeleteComment}
            />
          )}
        </div>
        <div className=''>
          {/* <CreateComment postId={postId} /> */}
          <CreateComment postId={postId}/>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CommentsComponent;
