import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../pages/about";
import Competition from "../pages/competition"
import Competitions from "../pages/competitions"
import MatchInfo from "../pages/matchInfo"
import Home from "../pages/home"

// consider making it a privet route
// decide weather to use component attribute or not

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/about"><About/></Route>
                <Route path="/competition" component={Competition} />
                <Route path="/competitions" component={Competitions} />
                <Route path="/matchInfo" component={MatchInfo} />
                {/* <Route path="fixtures" component={ }/> */}
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}