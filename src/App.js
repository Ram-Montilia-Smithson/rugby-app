import premiership from "./images/00_1_logo_premiership_rugby-999x562.jpg";
import './scss/main.css';

function App() {
  return (
    <div class="parent">
      <div class="header">
        <img src="./images/rugby world.png" alt="Rugby World" class="header-left" />
        <div class="header-options">
          <a href="http://localhost:3000/" class="option">FIXTURES</a>
          <a href="http://localhost:3000/" class="option">STANDING</a>
          <a href="http://localhost:3000/" class="option">TEAMS</a>
          <a href="http://localhost:3000/" class="option">COMPETITIONS</a>
          <a href="http://localhost:3000/" class="option">CREDITS</a>
        </div>
      </div>
      <div class="head-line">
        <div class="head-line-child">RUGBY WORLD</div>
      </div>
      <div class="line">
        <div class="line-child">HERE YOU CAN FIND ALL THE RUGBY</div>
        <div class="line-child">STATS FROM AROUND THE WORLD</div>
      </div>
      <div class="button">
        <div class="button-child">Book a Demo</div>
      </div>
      <div class="footer">
        <a href="http://localhost:3000/">
          <img class="premiership" src={premiership}
            alt="premiership" />
        </a>
        <a href="http://localhost:3000/">
          <img class="rwc" src="./images/1200px-Rugby_World_Cup_2023_logo.svg.png"
            alt="rwc" />
        </a>
        <a href="http://localhost:3000/">
          <img class="SupeRugby" src="./images/1200px-SupeRugby_Logo.svg.png"
            alt="SupeRugby" />
        </a>
        <a href="http://localhost:3000/">
          <img class="SIX_NATIONS" src="./images/GUINNESS_SIX_NATIONS_LANDSCAPE_STACKED_RGB.png"
            alt="SIX_NATIONS" />
        </a>
        <a href="http://localhost:3000/">
          <img class="pro14" src="./images/pro14cat.jpg"
            alt="pro14" />
        </a>
        <a href="http://localhost:3000/">
          <img class="rugbypass" src="./images/RugbyPass-logo.png"
            alt="rugby pass" />
        </a>
        <a href="http://localhost:3000/">
          <img class="Top14" src="./images/Logo_Top14_2012.png"
            alt="Top14" />
        </a>
      </div>
    </div>
  );
}

export default App;
