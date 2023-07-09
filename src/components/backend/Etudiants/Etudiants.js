import React, {Fragment} from "react";

import { Link } from "react-router-dom";

const Etudiants = () =>{
    return (
        <Fragment>
            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="card elevated-1 rounded-0 p-2">
                        <div className="d-flex justify-content-between">
                            <h4 className="text-center text-muted">Etudiants</h4>
                            <div className="d-flex justify-content-between">
                                <Link type="button" className="btn btn-info" to="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Imprimer en PDF"><span className="fa fa-print"></span></Link>
                                <Link type="button" className="btn btn-primary ml-1" to="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Imprimer en Excel"><span className="fa fa-print"></span></Link>
                                <Link type="button" className="btn btn-success ml-1" to="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Créer une classe"><span className="fa fa-plus"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-md-12">
                    <div className="card elevated-1 rounded-0 p-2">
                        <div className="d-flex justify-content-between">
                            <input type="text" className="form-control" placeholder="Recherche...."/>
                            <Link className="btn btn-primary mr-4" type="button" to="#"><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-md-12">
                    <div className="card elevated-1 rounded-0 p-2">
                        <div className="table-reponsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Photo</th>
                                        <th>Nom</th>
                                        <th>Prénom</th>
                                        <th>Adresse email</th>
                                        <th>Contact</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><span className="fa fa-user"></span></td>
                                        <td>RAMANANA Thu Ming</td>
                                        <td>Thierry</td>
                                        <td>ramananathumingthierry@gmail.com</td>
                                        <td>032 75 637 70</td>
                                        <td className="text-center">
                                            <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                            <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                            <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><span className="fa fa-user"></span></td>
                                        <td>Tiafinjara Nirina</td>
                                        <td>Joella</td>
                                        <td>tiafinjaran@gmail.com</td>
                                        <td>032 97 905 36</td>
                                        <td className="text-center">
                                            <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                            <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                            <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><span className="fa fa-user"></span></td>
                                        <td>Totozamany</td>
                                        <td>Jonathan</td>
                                        <td>jonathan-T@gmail.com</td>
                                        <td>038 87 905 36</td>
                                        <td className="text-center">
                                            <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                            <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                            <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><span className="fa fa-user"></span></td>
                                        <td>Roberto</td>
                                        <td>Jude</td>
                                        <td>juderoberto@gmail.com</td>
                                        <td>033 44 987 36</td>
                                        <td className="text-center">
                                            <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                            <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                            <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><span className="fa fa-user"></span></td>
                                        <td>Ulsy</td>
                                        <td>Franck</td>
                                        <td>franck87@gmail.com</td>
                                        <td>038 87 905 36</td>
                                        <td className="text-center">
                                            <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                            <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                            <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td><span className="fa fa-user"></span></td>
                                        <td>RAMANANA Thu Ming</td>
                                        <td>Thierry</td>
                                        <td>ramananathumingthierry@gmail.com</td>
                                        <td>032 75 637 70</td>
                                        <td className="text-center">
                                            <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                            <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                            <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td><span className="fa fa-user"></span></td>
                                        <td>Tiafinjara Nirina</td>
                                        <td>Joella</td>
                                        <td>tiafinjaran@gmail.com</td>
                                        <td>032 97 905 36</td>
                                        <td className="text-center">
                                            <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                            <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                            <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td><span className="fa fa-user"></span></td>
                                        <td>Totozamany</td>
                                        <td>Jonathan</td>
                                        <td>jonathan-T@gmail.com</td>
                                        <td>038 87 905 36</td>
                                        <td className="text-center">
                                            <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                            <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                            <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td><span className="fa fa-user"></span></td>
                                        <td>Roberto</td>
                                        <td>Jude</td>
                                        <td>juderoberto@gmail.com</td>
                                        <td>033 44 987 36</td>
                                        <td className="text-center">
                                            <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                            <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                            <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td><span className="fa fa-user"></span></td>
                                        <td>Ulsy</td>
                                        <td>Franck</td>
                                        <td>franck87@gmail.com</td>
                                        <td>038 87 905 36</td>
                                        <td className="text-center">
                                            <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                            <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                            <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td><span className="fa fa-user"></span></td>
                                        <td>Ulsy</td>
                                        <td>Franck</td>
                                        <td>franck87@gmail.com</td>
                                        <td>038 87 905 36</td>
                                        <td className="text-center">
                                            <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                            <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                            <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Etudiants;