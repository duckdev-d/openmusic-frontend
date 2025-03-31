interface Props {
  width: string;
  fontSize: string;
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  value?: string;
  setValue: (value: string) => void;
  marginBottom?: string;
}

export default function Search({
  width,
  fontSize,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  value = "",
  setValue,
  marginBottom,
}: Props) {
  return (
    <div
      className="search-input"
      style={{ width: width, marginBottom: marginBottom }}
    >
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        value={value}
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
