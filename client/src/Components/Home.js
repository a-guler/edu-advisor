import React, { useState, useEffect } from "react";
import Post from "./Post";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
        console.log(posts);
      });
    });
  }, []);

  return (
    <div className="bg-black">
      {posts &&
        posts
          .sort((a, b) => a.createdAt < b.createdAt)
          .map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
}

export default Home;
