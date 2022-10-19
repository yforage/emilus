import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Pages = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/list`} component={lazy(() => import(`./list`))} />
    </Switch>
  </Suspense>
);

export default Pages;