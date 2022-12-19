import './App.css';
import Allroutes from './Components/Allroutes';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Navbar/Footer';





function App() {
  return (
    <div className="App" style={{ "margin": "0px" }}>
      <Navbar />
      <Allroutes />
      <Footer />
    </div>
  );
}






export default App;
