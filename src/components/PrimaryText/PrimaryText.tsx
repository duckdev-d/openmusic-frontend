import React from "react";

interface Props {
  size: string;
  weight?: string;
  children?: React.ReactNode;
  mBottom?: string;
}

export default function PrimaryText({
  size,
  weight = "normal",
  children,
  mBottom,
}: Props) {
  return (
    <div className="text">
      <p style={{ fontSize: size, fontWeight: weight, marginBottom: mBottom }}>
        {children}
      </p>
    </div>
  );
}
