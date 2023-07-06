import React from "react";
import { Route} from "react-router-dom";
import FrontendLayout from "./layouts/FrontEnd/FontendLayout";

const PublicRoute = ({...rest}) =>{

    return (
        <Route {...rest}
            render={() => <FrontendLayout/>
            }
        />
    );
}

export default PublicRoute;