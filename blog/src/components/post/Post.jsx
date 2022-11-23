import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Haircare">
              Haircare
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Skincare">
              Skincare
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          "I just want to be a normal person"
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      The sun has a big dream to warm all beings. Tigers, 
      leopards, and antelopes spend their lives with adventurous 
      hunts and hiding. The little sunflower has the joy of 
      stretching out in the sun, the green grass likes to catch 
      the morning dew. It doesn't have to be anything big or big, 
      even small, ordinary creatures can live happily and fully 
      their lives. Hopefully, you will ignore all the things other 
      people say you "must" do, just live a normal life, or do 
      something as long as you are happy.
      </p>
    </div>
  );
}