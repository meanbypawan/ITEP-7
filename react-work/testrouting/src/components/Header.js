import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../auth";

function Header() {
    const navigate = useNavigate();
    const handleSignOut = ()=>{
        sessionStorage.setItem("isLoggedIn",null);
        sessionStorage.setItem("currentUserEmail","");
        sessionStorage.clear();
        navigate("/sign-in");
    }
    return <>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item active"><Link className="nav-link" to="/dashboard">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/create-new-task">Create New Task</Link></li>
                {!isLoggedIn() && <li className="nav-item"><Link className="nav-link" to="/sign-in">Sign in</Link></li>}
                {!isLoggedIn() && <li className="nav-item"><Link className="nav-link" to="">Sign up</Link></li>}
                {isLoggedIn() && <li className="nav-item"><button onClick={handleSignOut} className="btn btn-outline-danger">Sign out</button></li>}
            </ul>
        </nav>

    </>
}
export default Header;