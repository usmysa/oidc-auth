"use client";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = ({ name }: TextInputProps) => {
  return <input name={name} type="text" />;
};
