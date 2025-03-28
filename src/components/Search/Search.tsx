interface Props {
  width: string;
  fontSize: string;
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
}

export default function Search({
  width,
  fontSize,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}: Props) {
  return (
    <div className="search-input" style={{ width: width }}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: width,
          fontSize: fontSize,
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
          outline: "none",
          background: "#202020",
          borderRadius: "50px",
        }}
      />
    </div>
  );
}
