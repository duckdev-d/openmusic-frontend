import React from "react";

interface Props {
  size: string;
  weight?: string;
  color?: string;
  children?: React.ReactNode;
  mBottom?: string;
  className?: string;
}

export default function SecondaryText({
  size,
  weight = "normal",
  color = "rgb(192, 192, 192)",
  children,
  mBottom,
  className,
}: Props) {
  return (
    <div className={className}>
      <p
        style={{
          fontSize: size,
          fontWeight: weight,
          color: color,
          marginBottom: mBottom,
        }}
      >
        {children}
      </p>
    </div>
  );
}
