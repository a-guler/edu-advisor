import { formatISO9075 } from "date-fns";

function Post({ title, summary, content, createdAt, cover, User }) {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://m.media-amazon.com/images/I/81DpGT7-McL._AC_SX679_.jpg"
          alt=""
        />
      </div>

      <div className="content">
        <h2>{title}</h2>
        <p className="info">
          <a href="" className="author">
            {User.username}
          </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}

export default Post;
