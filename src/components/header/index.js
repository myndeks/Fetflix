import "./style.css"
import SignInBtn from '../../components/helpers/button/index.js';

import {
  Link
} from "react-router-dom";

function Header ({btnInfo, link}) {
  return(
    <div className="header">
      <a href="#">F</a>
      <SignInBtn btnInfo={btnInfo} link={link} />
    </div>
  );
}

export default Header;
