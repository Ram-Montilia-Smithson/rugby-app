import './scss/main.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// consider making it a privet route
import About from './pages/about';
import Competition from './pages/competition';
import Competitions from './pages/competitions';
import Home from './pages/home';
import MatchInfo from './pages/matchInfo';
import logo from "./images/rugby world logo.png"
// correct logo design and align it correctly
import Footer from './components/footer';

// consider an option to turn the entire website from english to hebrew, including the competitions's and teams's logos
// that you would create using your newly acquired design skills

function App() {
  return (
    <div className="parent">
      <BrowserRouter>
        <div className="header">
          <img src={logo} alt="Rugby World" className="header-left" />
          <div className="header-options">
            <Link to="/">HOME</Link>
            <Link to="/competitions">COMPETITIONS</Link>
            <Link to="/about">ABOUT</Link>
            <a href="#footer">CREDITS</a>
          </div>
        </div>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/competition" component={Competition} />
          <Route path="/competitions" component={Competitions} />
          <Route path="/matchInfo" component={MatchInfo} />
          {/* <Route path="fixtures" component={ }/> */}
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
