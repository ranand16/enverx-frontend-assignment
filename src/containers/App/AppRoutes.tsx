import React, { useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';

import ARoute from '../../config/a-route';
import { ROUTES } from '../../config/routes.config';

const AppNavigator: React.FC = () => {

  return (
    <>
    <Switch>
      <Route path={ROUTES.map((route) => route.routeProps.path)}>
          <Switch>
            {
              ROUTES.map((route, i)=> {
                console.log("route::  ", route)
                return <ARoute key={i} {...route.routeProps} /> 
              })
            }
          </Switch>
      </Route>
    </Switch>
    </>
  );
};

export default AppNavigator;
