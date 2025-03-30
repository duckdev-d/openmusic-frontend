interface Props {
  width?: string;
  className?: string;
  color?: string;
  borderRadius?: string;
}

export default function Cover({
  width = "1vw",
  className = "cover",
  color = "#D9D9D9",
  borderRadius = "10px",
}: Props) {
  return (
    <div
      className={className}
      style={{
        width: width,
        height: width,
        background: color,
        borderRadius: borderRadius,
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.52)",
      }}
    ></div>
  );
}
