import React from 'react';

//interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      {...props}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
};

export default Input;
