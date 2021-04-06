import './scss/main.css';
import Competitions from "./pages/competitions"

// consider an option to turn the entire website from english to hebrew, including the competitions's and teams's logos
// that you woulg create using your newly aquired design skills

function App() {
  return (
    <div className="parent">
      <div className="header">
        <img src="./images/rugby world.png" alt="Rugby World" className="header-left" />
        <div className="header-options">
          <a href="http://localhost:3000/" className="option">FIXTURES</a>
          <a href="http://localhost:3000/" className="option">STANDING</a>
          <a href="http://localhost:3000/" className="option">TEAMS</a>
          <a href="http://localhost:3000/" className="option">COMPETITIONS</a>
          <a href="http://localhost:3000/" className="option">CREDITS</a>
        </div>
      </div>
      <div className="head-line">
        <div className="head-line-child">RUGBY WORLD</div>
      </div>
      <div className="line">
        <div className="line-child">HERE YOU CAN FIND ALL THE RUGBY</div>
        <div className="line-child">STATS FROM AROUND THE WORLD</div>
      </div>
      <div className="button">
        <div className="button-child">Book a Demo</div>
      </div>
      <Competitions/>
      <div className="footer">
        {/* <a href="http://localhost:3000/">
          <img className="premiership" src={premiership}
            alt="premiership" />
        </a> */}
        <a href="http://localhost:3000/">
          <img className="rwc" src="./images/1200px-Rugby_World_Cup_2023_logo.svg.png"
            alt="rwc" />
        </a>
        <a href="http://localhost:3000/">
          <img className="SupeRugby" src="./images/1200px-SupeRugby_Logo.svg.png"
            alt="SupeRugby" />
        </a>
        <a href="http://localhost:3000/">
          <img className="SIX_NATIONS" src="./images/GUINNESS_SIX_NATIONS_LANDSCAPE_STACKED_RGB.png"
            alt="SIX_NATIONS" />
        </a>
        <a href="http://localhost:3000/">
          <img className="pro14" src="./images/pro14cat.jpg"
            alt="pro14" />
        </a>
        <a href="http://localhost:3000/">
          <img className="rugbypass" src="./images/RugbyPass-logo.png"
            alt="rugby pass" />
        </a>
        <a href="http://localhost:3000/">
          <img className="Top14" src="./images/Logo_Top14_2012.png"
            alt="Top14" />
        </a>
      </div>
    </div>
  );
}

export default App;
