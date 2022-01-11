import "./style.css";
import { useState } from "react";

function PopUp ({url}) {

  const [action, setAction] = useState('pop_up pop_up-close');
  const [closePopUp, setClosePopUp] = useState('close_pop_up_button');

  const handleCloseOpen = () => {
    setAction('pop_up pop_up-open')
  }

  const handleClosePopUp = () => {
    setAction('pop_up pop_up-close');
  }



  return (
    <div>
      <button onClick={handleCloseOpen} className="btn-red"> Watch </button>

      <div className={action}>
        <div  onClick={handleClosePopUp} className={closePopUp}> Close </div>
        <iframe src={url} />
       </div>
    </div>
  )
}

export default PopUp;
