import "./Home.css";

export default function HomePage() {
  return (
    <div className="home">
      <h1>home page</h1>
      <br />
      <p style={{ color: "violet" }}>
        your access token is: {localStorage.getItem("jwt")}
      </p>
    </div>
  );
}
