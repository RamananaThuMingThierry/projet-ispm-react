import React from "react";
import { Link } from "react-router-dom";

const Aside = () =>{
    return (
      <nav className="sb-sidenav accordion sb-sidenav-dark bg-success" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
          <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <Link className="nav-link" to="index.html">
                  <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                  Dashboard
              </Link>
              <div className="sb-sidenav-menu-heading">Interface</div>
              
              <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Classes
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
              </Link>
              <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" to="layout-static.html">Ajouter</Link>
                      <Link className="nav-link" to="layout-sidenav-light.html">Classes</Link>
                  </nav>
              </div>
              
              <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseFiliere" aria-expanded="false" aria-controls="collapseFiliere">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Filières
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
              </Link>
              <div className="collapse" id="collapseFiliere" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" to="layout-static.html">Ajouter</Link>
                      <Link className="nav-link" to="layout-sidenav-light.html">Filières</Link>
                  </nav>
              </div>

              {/* Etudiants */}
              <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseEtudiants" aria-expanded="false" aria-controls="collapseEtudiants">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Etudiants
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
              </Link>
              <div className="collapse" id="collapseEtudiants" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" to="layout-static.html">Ajouter</Link>
                      <Link className="nav-link" to="layout-sidenav-light.html">Etudiants</Link>
                  </nav>
              </div>

               {/* Utilisateurs */}
               <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseUtilisateurs" aria-expanded="false" aria-controls="collapseUtilisateurs">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Utilisateurs
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
              </Link>
              <div className="collapse" id="collapseUtilisateurs" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" to="layout-static.html">Ajouter</Link>
                      <Link className="nav-link" to="layout-sidenav-light.html">Utilisateurs</Link>
                  </nav>
              </div>

          </div>
      </div>
      <div className="sb-sidenav-footer bg-success">
          <div className="small text-center text-white text-bold">Version 1.2.0</div>
      </div>
  </nav>
    );
}

export default Aside;