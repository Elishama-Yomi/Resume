import './App.css';
import Banner from './components/banner';
import Education from './components/education';
import Footer from './components/footer';
import Summary from './components/summary';
import Work from './components/work';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Summary/>
      <Education/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
