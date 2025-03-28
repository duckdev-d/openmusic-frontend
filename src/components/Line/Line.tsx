interface Props {
  width: string;
  height: string;
  color?: string;
  mBottom?: string;
  borderRadius?: string;
}

export default function Line({
  width,
  height,
  color = "white",
  mBottom = "0",
  borderRadius = "0",
}: Props) {
  return (
    <div
      style={{
        width: width,
        height: height,
        background: color,
        minHeight: "3px",
        marginBottom: mBottom,
        borderRadius: borderRadius,
      }}
    ></div>
  );
}
