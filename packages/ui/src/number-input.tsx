"use client";

interface NumberInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const NumberInput = ({ name }: NumberInputProps) => {
  return <input inputMode="numeric" name={name} pattern="\d*" type="text" />;
};
