import React from "react";
import "../../assets/admin/js/scripts";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import swal from "sweetalert";

const Navbar = () =>{
    
    const history = useHistory();
    const logoutSubmit = (e) =>{
        e.preventDefault();
        axios.post(`api/logout`).then(res =>{
            if(res.data.status === 200){
                localStorage.removeItem('auth_token', res.data.token);
                localStorage.removeItem('auth_name', res.data.username);
                swal("Success", res.data.message, "success");
                history.push('/login');
            }
        });
    }

    return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-success">
            <Link className="navbar-brand ps-3" to="/admin/dashboard">Dashboard ISPM</Link>
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle"><i className="fas fa-bars"></i></button>
            <ul className="navbar-nav d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#!">A propos</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" onClick={logoutSubmit} to="/logout">Déconnection</Link></li>
                    </ul>
                </li>
            </ul>
    
    </nav>        
    );
}

export default Navbar;

