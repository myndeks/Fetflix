import './style.css';
import Button from '../helpers/button/index.js';

function Hero () {
  return (
    <div className="hero">
      <h1>Wanna more Content?</h1>
      <Button btnInfo={'Get Access'} link={'/login'} />
    </div>
  );
}

export default Hero;
