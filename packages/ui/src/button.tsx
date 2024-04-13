"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className="bg-blue-500 bg-black" onClick={onClick} type="button">
      {children}
    </button>
  );
};

export const SubmitButton = ({ children }: ButtonProps) => {
  return <button type="submit">{children}</button>;
};
