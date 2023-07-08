import React from "react";
import { Link } from "react-router-dom";

const Page403 = () =>{
    return (
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold text-success">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page interdit.</p>
                <p class="lead text-muted">
                    Accès refusé! comme vous n'êtes pas administrateur.
                </p>
                <Link to="" class="btn btn-success">Retour</Link>
            </div>
        </div>
    );
}

export default Page403;