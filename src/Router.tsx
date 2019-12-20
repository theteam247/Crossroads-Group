import React, { FC, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "containers/App";
import Body from "containers/Body";
import Loader from "components/Loader";

// pages
const Home = lazy(() => import("pages/Home"));

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
                <Route exact path="/" component={Home} />
                <Route path="*" component={Home} />
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
