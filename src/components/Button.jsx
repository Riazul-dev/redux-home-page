import React from "react";

function Button({ children, className = "", type = "button", ...props }) {
  return (
    <button className={`${className} rounded-xl`} type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;
