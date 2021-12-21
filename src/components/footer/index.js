import './style.css';
import CreditCards from './images/credit.png';

function Footer () {
  return (
    <div className="footer">
      <div className="footer_content">
        <p>
          We care about your entertainment. Copyright © 2019–2021 felix.com
        </p>
        <div className="payment_accept">
          <img src={CreditCards} alt="credit cards"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
