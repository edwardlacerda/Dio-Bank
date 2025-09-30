import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ children, className, ...rest }) => (
  <input
    className={`w-full px-3 py-2 mb-4 rounded bg-white  text-black  ${className ?? ""}`}
    {...rest}
  >
    {children}
  </input>
);

export default Input;
