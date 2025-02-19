import { Link } from "react-router-dom";

function Header() {
    return <>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Task-Managment</a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="active"><Link to="/">Home</Link></li>
                    <li><Link to="/create-new-task">Create New Task</Link></li>
                    <li><Link to="/view-all-task">View All Task</Link></li>
                    <li><Link to="/completed-task">Completed Task</Link></li>
                    <li><Link to="/pending-task">Pending Task</Link></li>
                </ul>
            </div>
        </nav>
    </>
}
export default Header;