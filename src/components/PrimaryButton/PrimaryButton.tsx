import "./PrimaryButton.css";
import React from "react";

interface Props {
  height: string;
  width: string;
  children?: React.ReactNode;
  mBottom?: string;
  fontSize?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PrimaryButton({
  height,
  width,
  children,
  mBottom = "0",
  fontSize = "1vw",
  onClick,
}: Props) {
  return (
    <div className="primary-btn-wrap">
      <button
        onClick={onClick}
        style={{
          width: width,
          height: height,
          marginBottom: mBottom,
          fontSize: fontSize,
        }}
      >
        {children}
      </button>
    </div>
  );
}
