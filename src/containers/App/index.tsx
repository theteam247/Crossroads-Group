import React, { FC } from "react";

export interface AppProps {}

export const App: FC<AppProps> = ({ children }) => {

  return (
    <>
      {children}
    </>
  );
};

App.defaultProps = {};

export default App;
