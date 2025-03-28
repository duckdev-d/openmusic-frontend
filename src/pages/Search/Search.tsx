import Search from "../../components/Search/Search";

export default function SearchPage() {
  return (
    <div
      className="search"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Search
        width="40vw"
        fontSize="1.5vw"
        paddingBottom="0.5vw"
        paddingTop="0.5vw"
        paddingLeft="1vw"
        paddingRight="1vw"
      />
    </div>
  );
}
