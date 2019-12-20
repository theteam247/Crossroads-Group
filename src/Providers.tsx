import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from "store";

export interface ProvidersProps {}

export const Providers: React.FC<PropsWithChildren<ProvidersProps>> = ({
  children
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
