import './scss/main.css';
import Footer from './components/footer';
import Router from './components/router';

// consider an option to turn the entire website from english to hebrew, including the competitions's and teams's logos
// that you would create using your newly acquired design skills



function App() {
  return (
    <div className="parent">
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
