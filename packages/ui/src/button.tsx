"use client";

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  );
};
