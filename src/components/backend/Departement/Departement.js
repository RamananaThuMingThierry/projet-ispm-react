import React, {Fragment} from "react";
import { Link } from "react-router-dom";
const Departement = () =>{
    return (
        <Fragment>
        <div className="row mt-4">
            <div className="col-md-12">
                <div className="card elevated-1 rounded-0 p-2">
                    <div className="d-flex justify-content-between">
                        <h4 className="text-center text-muted">Départements</h4>
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
                                    <th>Nom</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Informatique et Télécommunication</td>
                                    <td className="text-center">
                                        <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                        <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                        <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Technique des affaires</td>
                                    <td className="text-center">
                                        <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                        <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                        <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>BIOTECHNOLOGIE ET AGRONOMIE</td>
                                    <td className="text-center">
                                        <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                        <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                        <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>GENIE INDUSTRIEL ET GENIE CIVIL</td>
                                    <td className="text-center">
                                        <Link to="#" className="btn btn-warning text-white"><span className="fa fa-eye"></span></Link>
                                        <Link to="#" className="btn btn-primary"><span className="fa fa-pencil"></span></Link>
                                        <Link to="#" className="btn btn-danger"><span className="fa fa-remove"></span></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Technique du Tourisme</td>
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

export default Departement;