import "./style.css"
import { Link } from "react-router-dom";

import SignInBtn from '../../components/helpers/button/index.js';


function Header ({btnInfo, link}) {
  return(
    <div className="header">
      <Link to="/">F</Link>
      <SignInBtn btnInfo={btnInfo} link={link} />
    </div>
  );
}

export default Header;
