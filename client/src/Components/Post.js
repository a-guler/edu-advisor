import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
function Post({ id, title, summary, content, createdAt, cover, User }) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>

      <div className="content">
        <Link to={`/post/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <div href="" className="author">
            {User.username}
          </div>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}

export default Post;
