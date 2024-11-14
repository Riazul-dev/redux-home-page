import React from "react";

function Container({ children, className = "" }) {
  return <div className={`${className} w-full h-full`}>{children}</div>;
}

export default Container;
