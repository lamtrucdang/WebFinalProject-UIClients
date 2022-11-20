
import "./topbar.css";

export default function TopBar() {
  
  
  return (
    
    <div className="top"> 
      <div className="topLeft">
      <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
    
      <div className="topCenter"></div>
      <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT US</li>
          <li className="topListItem">FACE TYPE</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOG OUT</li>
      </ul>
      <div className="topRight">
        <img
         className="topImg" src="./img/photo2.webp" alt="avata" />
         <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}