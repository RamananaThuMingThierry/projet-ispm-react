import React, { useState } from "react";
//import "../../../assets/frontend/css/styles.css"
import axios from "axios";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";

const Login = () => {

  const history = useHistory();

    const [LoginInput, setLogin] = useState({
        email: '',
        mot_de_passe:'',
        error_list: [],
    });

    const handleInput = (e) =>{
        e.persist();
        setLogin({...LoginInput, [e.target.name]: e.target.value});
    }

    const LoginSubmit = (e) =>{
        e.preventDefault();

        const data = {
            email: LoginInput.email,
            mot_de_passe: LoginInput.mot_de_passe
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res =>{
                if(res.data.status  === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message,"success");
                    if(res.data.role === "admin"){
                        history.push("/admin/dashboard");
                    }else{
                        history.push("/");
                    }
                }else if(res.data.status === 401){
                    swal("Warning", res.data.message,"warning");
                }
                else{
                    setLogin({...LoginInput, error_list: res.data.Validation_errors});
                }
            });
        });
    }

  return (
    <div className="bg-success">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-body">
                                    <form onSubmit={LoginSubmit}>
                                    <div className="form-floating mb-3">
                                        <div className="row">
                                            <div className="text-center">
                                              <img src={`http://localhost:8000/logo/logo.jpg`}/>
                                            </div>
                                        </div> 
                                        <h3 className="text-center text-success font-weight-light my-4">Connexion</h3>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="email" placeholder="xyz@gmail.com" name="email" onChange={handleInput} className="form-control" value={LoginInput.email}/>
                                        <span>{LoginInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" placeholder="Mot de passe" name="mot_de_passe" onChange={handleInput} className="form-control" value={LoginInput.mot_de_passe}/>
                                        <span>{LoginInput.error_list.mot_de_passe}</span>
                                    </div>
                                        {/* <div className="form-check mb-3">
                                            <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                            <label className="form-check-label" for="inputRememberPassword">Me rappeler</label>
                                        </div> */}
                                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <a className="small" href="password.html">Mot de passe oublier?</a>
                                            <button type="submit" className="btn btn-primary btn-block">Connexion</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer text-center py-3">
                                    <div className="small"><Link to="register">J'ai n'est pas de compte? S'inscrire !</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div id="layoutAuthentication_footer">
            <footer className="py-4 bg-light mt-auto">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">Projet 2023</div>
                        <div className="text-muted">
                           Institut Supérieur Polytechnique de Madagascar
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    </div>
  );
}

export default Login;