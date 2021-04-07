import './scss/main.css';
import Router from './components/router';
import Header from './components/header';

// consider an option to turn the entire website from english to hebrew, including the competitions's and teams's logos
// that you would create using your newly acquired design skills

function App() {
  return (
    // <BrowserRouter>
      <div className="parent">
        <Header/>
        <Router />
      </div>
    // </BrowserRouter>
  );
}

export default App;
