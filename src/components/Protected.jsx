import React from "react";
import { Route, Redirect } from "react-router-dom";

function isAuthenticated() {
  return true;
}

export default function Protected(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={routeProps =>
        isAuthenticated() ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
