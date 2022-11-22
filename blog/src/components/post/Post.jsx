import "./post.css"
export default function Post() {
    return (
        <div className="post">
            <img
        className="postImg"
        src="./img/photo1.webp"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            {/* <Link className="link" to="/posts?cat=Music"> */}
              Face Type
            {/* </Link> */}
          </span>
          <span className="postCat">
            {/* <Link className="link" to="/posts?cat=Music"> */}
              Skincare
            {/* </Link> */}
          </span>
        </div>
        <span className="postTitle">
          {/* <Link to="/post/abc" className="link"> */}
            Be Beauty, Be you
          {/* </Link> */}
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      "Ban flower blooms in February, Milk flower returns in September,
        we are all waiting for a brilliant flower season of our own."
      </p>
        </div>
    )
}