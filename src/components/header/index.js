import "./style.css"

function Header ({btnInfo}) {
  return(
    <div className="header">
      <a href="#">F</a>
      <button>{btnInfo}</button>
    </div>
  );
}

export default Header;
