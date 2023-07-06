import React, { useState } from "react";
//import "../../../assets/frontend/css/styles.css"
import axios from "axios";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";

const Register = () => {

  const history = useHistory();

  const [registerInput, setRegister] = useState({
      pseudo: '',
      email: '',
      mot_de_passe:'',
      error_list: [],
  });

  const handleInput = (e) =>{
      e.persist();
      setRegister({...registerInput, [e.target.name]: e.target.value});
  }

  const RegisterSubmit = (e) =>{

      e.preventDefault();

      console.log("Je suis ici!");

      const data = {
          pseudo: registerInput.pseudo,
          email: registerInput.email,
          mot_de_passe: registerInput.mot_de_passe
      }

      axios.get('/sanctum/csrf-cookie').then(response => {
          axios.post(`api/register`, data).then(res =>{
              if(res.data.status  === 200){
                  localStorage.setItem('auth_token', res.data.token);
                  localStorage.setItem('auth_name', res.data.username);
                  swal("Success", res.data.message,"success");
                  history.push("/admin/dashboard");
              }else{
                  setRegister({...registerInput, error_list: res.data.Validation_errors});
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
                            <div className="col-lg-6">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-body">
                                        <form onSubmit={RegisterSubmit}>
                                            <div className="row">
                                                <div className="text-center">
                                                <img src={`http://localhost:8000/logo/logo.jpg`}/>
                                                </div>
                                                <h3 className="text-center text-success">Inscription</h3>
                                            </div> 
                                            <div className="form-group mb-3">
                                        <input type="text" placeholder="Pseudo" name="pseudo" onChange={handleInput} value={registerInput.pseudo} className="form-control" />
                                        <span>{registerInput.error_list.pseudo}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" placeholder="E-mail" name="email" onChange={handleInput}  value={registerInput.email} className="form-control" />
                                        <span>{registerInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" placeholder="Mot de passe" name="mot_de_passe" onChange={handleInput}  value={registerInput.mot_de_passe} className="form-control" />
                                        <span>{registerInput.error_list.mot_de_passe}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" placeholder="Confirmer le mot de passe" name="comfirmer_mot_de_passe" onChange={handleInput}  value={registerInput.comfirmer_mot_de_passe} className="form-control" />
                                        <span>{registerInput.error_list.comfirmer_mot_de_passe}</span>
                                    </div>
                                    <div className="mt-4 mb-0">
                                        <div className="d-grid"><button type="submit" className="btn btn-primary btn-block">Créer un compte</button>
                                        </div>
                                    </div>
                                    </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><Link to="/login">J'ai déjà un compte! Se connecter</Link></div>
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

export default Register;