import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosInstance.get("/posts")
      .then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      {posts.slice(0, 5).map(post => (
        <div key={post.id}>
          <b>{post.title}</b>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
