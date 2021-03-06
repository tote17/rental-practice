import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "providers/AuthProvider";

const AuthRoute = ({ children, ...rest }) => {
  const authService = useAuth();

  const { isAuthenticated } = authService;
  const onlyChild = React.Children.only(children);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          React.cloneElement(onlyChild, { ...rest, ...props })
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default AuthRoute;
