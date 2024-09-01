import React from 'react'


const CommentModal = ({currentPostId}) => {

  return (
    <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">Comments</h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body p-4">
      <h2>Hii {currentPostId}</h2>
    </div>
    </div>
  )
}



export default CommentModal