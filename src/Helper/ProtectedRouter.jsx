import React, { Fragment, useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import Spinner from "../pages/spinners/Spinner";
import { AuthContextApi } from "./../Apis/AuthContext";

const ProtectedRouter = ({ component: Component, ...parameters }) => {
  let USER = useContext(AuthContextApi);
  return (
    <Route
      {...parameters}
      render={props => {
        return (
          <Fragment>
            {USER === null ? (
              <Spinner />
            ) : (
              <Fragment>
                {USER ? <Component {...props} /> : <Redirect to="/login" />}
              </Fragment>
            )}
          </Fragment>
        );
      }}
    />
  );
};

export default ProtectedRouter;
