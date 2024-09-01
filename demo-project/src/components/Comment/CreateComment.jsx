import React, { useEffect, useState, useRef, useCallback } from 'react';
import { BsEmojiSmileFill } from "react-icons/bs";
import "./createComment.css";
import Picker from '@emoji-mart/react';
import { useDispatch, useSelector } from 'react-redux';
import { newComment } from '../../actions/postAction';
import { NEW_COMMENT_RESET } from '../../constant/postConstant';
import { toast } from 'react-toastify';
import { clearErrors } from '../../actions/userActions';
import { useOutsideClick } from '../../utlis/useOutsideClick';

const CreateComment = ({ postId, parentCommentId = null }) => {
    const [comment, setComment] = useState("");
    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
    const dispatch = useDispatch();
    const emojiPickerRef = useRef(null);

   
   useOutsideClick(emojiPickerRef, () => setEmojiPickerVisible(false));

   

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

    const toggleEmojiPicker = () => {
        setEmojiPickerVisible(!emojiPickerVisible);
    };

    const addEmoji = (e) => {
        const sym = e.unified.split("-");
        const codeArray = sym.map(el => "0x" + el);
        const emoji = String.fromCodePoint(...codeArray);
        setComment(prevInput => prevInput + emoji);
    };

    return (
        <div className='border-top-3 p-2'>
            <div className='bg-white p-2 position-relative'  ref={emojiPickerRef}>
            {emojiPickerVisible && (
                    <div
                    className="emoji-picker">
                        <Picker onEmojiSelect={addEmoji} />
                    </div>
                )}
                <form
                    className='d-flex gap-2 justify-center align-items-center text-center'
                    onSubmit={submitCommentHandler}
                >
                    <BsEmojiSmileFill
                        size={35}
                        color='gold'
                        onClick={toggleEmojiPicker}
                    />
                    <textarea
                        name=""
                        id=""
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder='Post Your reply..'
                        className='comment-textarea'
                    />
                    <span className='gif-span'>GIF</span>
                    <button className='btn btn-primary btn-sm' type="submit" disabled={loading}>
                        {loading ? "Posting..." : "Post"}
                    </button>
                </form>
                
            </div>
        </div>
    );
};

export default CreateComment;
