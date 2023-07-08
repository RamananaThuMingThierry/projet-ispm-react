import React, { Component} from "react";
import Footer from "./Footer";
import Aside from "./Aside";
import Navbar from "./Navbar";
import ErrorPage from "../../components/ErrorPage";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts";
import Dashboard from "../../components/backend/Dashboard";
import {Route, Switch } from "react-router-dom";
import Classes from "../../components/backend/Classes/Classes";
import AddClasses from "../../components/backend/Classes/AddClassses";
import ViewClasses from "../../components/backend/Classes/ViewClasses";
import EditClasses from "../../components/backend/Classes/EditClasses";
import Filieres from "../../components/backend/Filieres/Filieres";
import AddFilieres from "../../components/backend/Filieres/AddFilieres";
import ViewFilieres from "../../components/backend/Filieres/ViewFilieres";
import EditFilieres from "../../components/backend/Filieres/EditFilieres";
import Etudiants from "../../components/backend/Etudiants/Etudiants";
import AddEtudiants from "../../components/backend/Etudiants/AddEtudiants";
import ViewEtudiants from "../../components/backend/Etudiants/ViewEtudiants";
import EditEtudiants from "../../components/backend/Etudiants/EditEtudiants";
import Historiques from "../../components/backend/Historique/Historiques";
import ViewHistoriques from "../../components/backend/Historique/ViewHistoriques";
import AddHistoriques from "../../components/backend/Historique/AddHistoriques";
import EditHistoriques from "../../components/backend/Historique/EditHistoriques";
import Users from "../../components/backend/Utilisateurs/Users";
import AddUsers from "../../components/backend/Utilisateurs/AddUsers";
import ViewUsers from "../../components/backend/Utilisateurs/ViewUsers";
import EditUsers from "../../components/backend/Utilisateurs/EditUsers";
class MasterLayout extends Component{
  render(){
    return (
      <div className="sb-nav-fixed">
          <Navbar/>
          <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
              <Aside/>
            </div>
            <div id="layoutSidenav_content">
                <main>
                  <Switch>
                    <Route exact path="/admin/dashboard" component={Dashboard} />
                    {/* Classes */}
                    <Route exact path="/admin/classes" component={Classes} />
                    <Route exact path="/admin/add-classes" component={AddClasses} />
                    <Route exact path="/admin/view-classes/:id" component={ViewClasses} />
                    <Route exact path="/admin/edit-classes/:id" component={EditClasses} />

                    {/* Filières */}
                    <Route exact path="/admin/filieres" component={Filieres} />
                    <Route exact path="/admin/add-filieres" component={AddFilieres} />
                    <Route exact path="/admin/view-filieres/:id" component={ViewFilieres} />
                    <Route exact path="/admin/edit-filieres/:id" component={EditFilieres} />

                    {/* Etudiants */}
                    <Route exact path="/admin/etudiants" component={Etudiants} />
                    <Route exact path="/admin/add-etudiants" component={AddEtudiants} />
                    <Route exact path="/admin/view-etudiants/:id" component={ViewEtudiants} />
                    <Route exact path="/admin/edit-etudiants/:id" component={EditEtudiants} />

                    {/* Historiques */}
                    <Route exact path="/admin/historiques" component={Historiques} />
                    <Route exact path="/admin/add-historiques" component={AddHistoriques} />
                    <Route exact path="/admin/view-historiques/:id" component={ViewHistoriques} />
                    <Route exact path="/admin/edit-historiques/:id" component={EditHistoriques} />

                    {/* Utilisateurs */}
                    <Route exact path="/admin/users" component={Users} />
                    <Route exact path="/admin/add-users" component={AddUsers} />
                    <Route exact path="/admin/view-users/:id" component={ViewUsers} />
                    <Route exact path="/admin/edit-users/:id" component={EditUsers} />

                    {/* Page d'erreur */}
                    <Route component={ErrorPage}/>
                  </Switch>
                </main>
             </div>
             <Footer/>
          </div>
      </div>
    );
  }
}

export default MasterLayout;