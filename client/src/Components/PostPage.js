import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";

function PostPage() {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then((response) => {
        response.json().then((postInfo) => {
          setPostInfo(postInfo);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  if (!postInfo) {
    return "";
  }
  return (
    <div>
      {postInfo && postInfo.User && postInfo.createdAt && (
        <div className="post-page">
          <h1>{postInfo.title}</h1>

          <div className="image">
            <img src={"http://localhost:4000/" + postInfo.cover} alt="" />
          </div>

          <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
          <div href="" className="author">
            by @{postInfo.User.username}
          </div>
          <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
      )}
    </div>
  );
}

export default PostPage;
