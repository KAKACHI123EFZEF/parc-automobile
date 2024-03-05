import { Link, Outlet } from "react-router-dom";

function Nav() {
    return (
        <div>
            <ul
                className="nav justify-content-end" style={{ height: "100px", lineHeight: "90px", backgroundColor: '#0969b0'}}>
                <li>
                    <img
                        src="src\assets\Premium Vector _ Car deal logo design template element with car and handshake illustration.jpeg"
                        alt="logo"
                        width={90}
                        style={{marginRight: '929px'}}
                    />
                </li>
                <li className="nav-item">
                    <Link to={"/"} className="nav-link" style={{color: '#bdd8eb'}}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link" style={{color: '#bdd8eb'}}>
                        Log In
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/signup"} className="nav-link" style={{color: '#bdd8eb'}}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Nav;
