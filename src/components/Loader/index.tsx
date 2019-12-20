import React, { FC } from "react";

export interface LoaderProps {}

export const Loader: FC<LoaderProps> = props => {
  return (
    <div
      className="fixed-top rounded-0 progress"
      style={{
        height: 4
      }}
    >
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        style={{
          width: "100%"
        }}
      ></div>
    </div>
  );
};

Loader.defaultProps = {};

export default Loader;
