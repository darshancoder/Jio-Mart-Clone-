import './App.css';
import Allroutes from './Components/Allroutes';
import { Footer } from './Navbar/Footer';
import { Navbar } from './Navbar/Navbar';



function App() {
  return (

        <div className="App">
          {/* <Navbar /> */}
          <Allroutes />
          <Footer/>
        </div>
    )
  }

export default App;
