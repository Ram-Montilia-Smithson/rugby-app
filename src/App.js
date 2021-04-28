import './scss/main/main.css';
import Footer from './components/footer';
import Navbar from './components/navbar';

// consider an option to turn the entire website from english to hebrew, including the competitions's and teams's logos
// that you would create using your newly acquired design skills

function App() {
  return (
    <div className="parent">
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
