"use client";

interface FlexProps {
  children: React.ReactNode;
}

export const Flex = ({ children }: FlexProps) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};
