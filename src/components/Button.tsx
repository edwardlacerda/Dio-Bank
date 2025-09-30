import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLElement>;

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => (
  <button
    className={`w-full mt-5 bg-lime-700 hover:bg-lime-800 text-white font-semibold py-2 px-4 rounded ${
      className ?? ""
    }`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
