import React from "react";
import { connect } from "react-redux";
import { Route, RouteProps } from "react-router-dom";
// import { RootReducer } from "../reducer";

interface OwnProps extends RouteProps {
  component: any;
}

export interface ARouteProps extends OwnProps {}

export const ARouteComponent = ({
  component: Component,
  ...rest
}: ARouteProps) => {

  const renderRedirect = (props: any) => { return <Component {...props} /> }

  if (!Component) {
    throw new Error(
      `A component needs to be specified for private route for path ${
        (rest as any).path
      }`
    );
  }

  return <Route {...rest} render={renderRedirect} />;
};

const ARoute = connect(null, null, null, { pure: false })(
  ARouteComponent
);

export default ARoute;
