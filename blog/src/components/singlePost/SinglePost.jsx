import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="./img/postphoto.jpeg"
          alt=""
        />
        <h1 className="singlePostTitle">
        Then it's time for us to "bloom"
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              {/* <Link className="link" to="/posts?username=SunHyun">
                SunHyun
              </Link> */}
              SunHyun
            </b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
        Sun hopes you don't blame yourself for not finding the job of your dreams,
        or feel sorry for yourself because looking around at your friends are better.
        It's really not your fault that you've tried your best but still can't get what
        you want.
          <br />
          <br />
        Sometimes Sun thinks, is our society too fetish for the early success of just
        a few? This inadvertently makes young people think that it is a common time to
        mark talent. If you do not achieve the same achievements as the minority group,
        it means that you are inferior. We are not wrong to honor the "flowers that soon bloom", 
        but do not let early success become an obsession for you, for yourself, for those around 
        you while we are blooming in different directions. , with different speeds and starting
        points.
        
        Everyone's success has its own name and definition. We, as "flowers", whether they bloom 
        sooner or later, they are all beautiful and sweetly scented. Hopefully, you will try your
        best, be patient and a little steadfast on your own path and wait for your flower season 
        to "bloom".
            <br/>
            <br/>
        
        </p>
      </div>
    </div>
  );
}