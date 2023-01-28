import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-name">
        <h1>ÅKA TÅG</h1>
      </div>
      <div className="city-names">
        <div className="stockholm">
          <h2>STOCKHOLM</h2>
          <p>10:30</p>
        </div>
        <img src="/src/assets/Arrow.svg" width="30px" />
        <div className="göteborg">
          <h2>GÖTEBORG</h2>
          <p>14:45</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
