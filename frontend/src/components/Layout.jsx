import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
                <Link className="navbar-brand text-white" to="/">FOSSEE Workshops</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/stats/public">Workshop Statistics</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/stats/team">Team Statistics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/workshop-status/instructor">Workshop Status</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/propose">Propose Workshop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/types">Workshop Types</Link>
                        </li>
                    </ul>
                    <div className="my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   <span className="material-icons" style={{verticalAlign: "middle"}}>account_circle</span>
                                    <p style={{display: "inline", verticalAlign: "middle"}}>
                                        User Name
                                    </p>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/profile">Profile</Link>
                                    <Link className="dropdown-item" to="/password-change">Change Password</Link>
                                    <Link className="dropdown-item" to="/logout">Logout</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="base-content">
                <Outlet />
            </div>

            <footer className="footer">
               <div className="container">
                   Developed by FOSSEE group, IIT Bombay
               </div> 
            </footer>
        </>
    );
}
