import "./sidebar.css"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="./img/lisa.webp" alt="" />
                <p>Bad boy ain't good, good boy ain't fun</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Skincare</li>
                    <li className="sidebarListItem">Makeup</li>
                    <li className="sidebarListItem">Oval</li>
                    <li className="sidebarListItem">Square</li>
                    <li className="sidebarListItem">Round</li>
                    <li className="sidebarListItem">Heart</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
                </div>
        </div>
    )
}