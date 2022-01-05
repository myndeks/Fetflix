import './style.css';

import {
  Link
} from "react-router-dom";

function Button ({btnInfo, link}) {
  return (
    <div className="btn">
      <Link to={link}><button className="btn-red"> {btnInfo} </button></Link>
    </div>
  );
}

export default Button;
