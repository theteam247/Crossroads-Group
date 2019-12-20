import React, { FC } from "react";
import { useSelector } from "react-redux";
import Loader from "components/Loader";

export interface AppProps {}

export const App: FC<AppProps> = ({ children }) => {
  const app = useSelector<State, AppState>(state => state.app);

  return (
    <>
      {app.loading > 0 && <Loader />}
      {children}
    </>
  );
};

App.defaultProps = {};

export default App;
