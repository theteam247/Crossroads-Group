import React, { FC } from "react";

export interface LoaderProps {}

export const Loader: FC<LoaderProps> = props => {
  return (
    <div className="fixed-top">
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{
            width: "100%"
          }}
        ></div>
      </div>
    </div>
  );
};

Loader.defaultProps = {};

export default Loader;
