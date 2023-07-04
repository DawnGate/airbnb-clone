import React from "react";

export interface BoxProps extends React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
}

const Box = (props: BoxProps) => {
  return <div {...props} />;
};

export default Box;
