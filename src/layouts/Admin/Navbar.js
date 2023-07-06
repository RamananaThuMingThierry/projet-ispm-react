import React from "react";
import { Link } from "react-router-dom";
import "../../assets/admin/js/scripts";

const Navbar = () =>{

    //const [isActive, setIsActive] = useState(false);

    // const handleClick = (e) =>{
    //     setIsActive(current => !current);
    // }

    return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-success">
            {/* <!-- Navbar Brand--> */}
            <Link className="navbar-brand ps-3" to="index.html"><img src={`https://locahost:8000/logo/logo.jpg`}/>Dashboard ISPM</Link>
            {/* <!-- Sidebar Toggle--> */}
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle"><i className="fas fa-bars"></i></button>
            {/* <!-- Navbar Search--> */}
            {/* <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form> */}
            {/* <!-- Navbar--> */}
            <ul className="navbar-nav d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#!">A propos</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="#!">Déconnection</Link></li>
                    </ul>
                </li>
            </ul>
    
    </nav>        
    );
}

export default Navbar;

