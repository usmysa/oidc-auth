"use client";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Radio = ({ label, name }: RadioProps) => {
  const id = `${name}-${label}`;

  return (
    <div>
      <input aria-label={label} id={id} name={name} type="radio" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
