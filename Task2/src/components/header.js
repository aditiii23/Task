import cart from "./images/cart.png"
import search from "./images/search.png"
export default function Header() {
  return (
    <div className="header-container">
      <div className="searchbox">
        <img
          src={search}
          style={{
            marginLeft: "10px",
            marginTop: "12px",
            width: "28px",
            height: "28px",
          }}
        />
        <text
          style={{
            marginTop: "9px",
            marginLeft: "5px",
            fontSize: "23px",
            color: "grey",
            fontFamily: "Open Sans",
          }}
        >
          Search
        </text>
      </div>
      <h2>Home</h2>
      <h2>Courses</h2>
      <img
        src={cart}
        style={{
          width: "50px",
          height: "40px",
        }}
      />
      <div>
        <button type="login" variant="outline-success" className="button">
          Login
        </button>
      </div>
    </div>
  )
}
