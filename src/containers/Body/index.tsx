import React, { FC } from "react";

export interface BodyProps {}

const Body: FC<BodyProps> = ({
  children
}) => {
  return (
    <main className="container">
      {children}
    </main>
  );
};

Body.defaultProps = {};

export default Body;
