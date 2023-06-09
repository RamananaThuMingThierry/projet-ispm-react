import React from "react";
import { Link } from "react-router-dom";

const Aside = () =>{
    return (
      <nav className="sb-sidenav accordion sb-sidenav-dark bg-success" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
          <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <Link className="nav-link" to="/admin/dashboard">
                  <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                  Accueil
              </Link>

              <div className="sb-sidenav-menu-heading">Interface</div>
              
              {/* Classes */}
              <Link className="nav-link" to="/admin/classes">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Classes
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
              </Link>
                
              {/* Département */}
              <Link className="nav-link" to="/admin/departement">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Département
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
              </Link>

              {/* Filières */}
              <Link className="nav-link" to="/admin/filieres">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Filières
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
              </Link>
              
              {/* Etudiants */}
              <Link className="nav-link" to="/admin/etudiants">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Etudiants
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
              </Link>
      
              {/* Historiques */}
              <Link className="nav-link" to="/admin/historiques">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Historiques
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
              </Link>

               {/* Utilisateurs */}
               <Link className="nav-link" to="/admin/users">
                  <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                  Utilisateurs
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-right"></i></div>
              </Link>
          </div>
      </div>
      <div className="sb-sidenav-footer bg-success">
          <div className="small text-center text-white text-bold">Version 1.2.0</div>
      </div>
  </nav>
    );
}

export default Aside;