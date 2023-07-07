import React, { Component} from "react";
import Footer from "./Footer";
import Aside from "./Aside";
import Navbar from "./Navbar";
import ErrorPage from "../../components/ErrorPage";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts";
//import "../../assets/admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
//import "../../assets/admin/dist/css/adminlte.min.css";
import Dashboard from "../../components/backend/Dashboard";
import {Route, Switch } from "react-router-dom";
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
                    
                    <Route component={ErrorPage}/>
                  </Switch>
                </main>
             </div>
             <Footer/>
          </div>
      </div>
            //     <div className="wrapper">
                  
            //         <Aside/>
            //         <div className="content-wrapper">
            //             <section class="content">
            //                 <div class="container-fluid pt-2">
            //                     <Switch>
            //                         <Route exact path="/admin/dashboard" component={Dashboard} />
            //                         {/* Catégories */}
            //                         {/* <Route exact path="/admin/category" component={Category} />
            //                         <Route exact path="/admin/add-category" component={AddCategory} />
            //                         <Route exact path="/admin/view-category/:id" component={ViewCategory} />
            //                         <Route exact path="/admin/edit-category/:id" component={EditCategory} /> */}

            //                         {/* Produits */}
            //                         {/* <Route exact path="/admin/product" component={Product} />
            //                         <Route exact path="/admin/add-product" component={AddProduct} />
            //                         <Route exact path="/admin/view-product/:id" component={ViewProduct} />
            //                         <Route exact path="/admin/edit-product/:id" component={EditProduct} /> */}

            //                         {/* Users */}
            //                         {/* <Route exact path="/admin/users" component={Users} />
            //                         <Route exact path="/admin/view-users/:id" component={ViewUsers} />
            //                         <Route exact path="/admin/edit-users/:id" component={EditUsers} /> */}

            //                         {/* Page d'erreurs */}
            //                         <Route component={ErrorPage}/>
            //                     </Switch>
            //                 </div>
            //             </section>
            //         </div>
            //         <Footer/>
            //         <aside class="control-sidebar control-sidebar-dark">
            //           {/* Control sidebar content goes here */}
            //         </aside>
            //     </div>
            // </div>
    );
  }
}

export default MasterLayout;