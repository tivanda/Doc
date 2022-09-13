import React, { useRef } from "react";
import { createComment } from "../../actions/postAction";
import { useDispatch } from "react-redux";
import "./Post.css";

const AddNewComment = ({ postId, userId }) => {
  const dispatch = useDispatch();
  const textInput = useRef();

  const makeComment = async (text) => {
    dispatch(createComment(postId, userId, text));
    textInput.current.value = "";
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          makeComment(e.target[0].value);
        }}
      >
        <input
          className="combox"
          type="text"
          placeholder="add a comment"
          required
          ref={textInput}
        />
      </form>
    </div>
  );
};

export default AddNewComment;
