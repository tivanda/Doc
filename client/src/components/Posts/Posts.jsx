import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/postAction";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  const [userPostList, setUserPostList] = useState([]);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  useEffect(() => {
    if (posts.length > 0 && user._id) {
      const p = posts.filter((post) => post.userId);
      setUserPostList(p);
    }
  }, [posts, user._id]);

  if (!userPostList || userPostList.length === 0) return "No Posts";

  return (
    <div className="Posts">
      {loading
        ? "Fetching posts...."
        : userPostList.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </div>
  );
};

export default Posts;
