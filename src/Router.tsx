import React, { FC, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "containers/App";
import Body from "containers/Body";
import Loader from "components/Loader";

// pages
const Commits = lazy(() => import("pages/Commits"));

export interface RouterProps {}

const Router: FC<RouterProps> = () => {
  return (
    <BrowserRouter>
      <Route component={App} />
      <Suspense fallback={<Loader />}>
        <Route
          render={props => (
            <Body {...props}>
              <Switch>
                <Route exact path="/commits" component={Commits} />
                <Redirect to="/commits" />
              </Switch>
            </Body>
          )}
        ></Route>
      </Suspense>
    </BrowserRouter>
  );
};

Router.defaultProps = {};

export default Router;
