interface Props {
  width: string;
}

export default function Search({ width }: Props) {
  return (
    <div className="search-input" style={{ width: width }}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: width,
          fontSize: "160%",
          paddingTop: "2%",
          paddingBottom: "2%",
          paddingLeft: "3%",
          paddingRight: "3%",
          outline: "none",
          background: "#202020",
          borderRadius: "50px",
        }}
      />
    </div>
  );
}
