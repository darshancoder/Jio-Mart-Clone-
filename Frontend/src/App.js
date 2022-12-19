import './App.css';
import Login from './login_signup/Login';
import Signup from './login_signup/Signup';
import Account from './my_account/Account';
import Allroutes from './Components/Allroutes';
import { Navbar } from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{ "margin": "0px" }}>
      {/* <Allroutes /> */}
      <Navbar/>
      
<Routes>
  <Route path='/user/login' element={<Login/>} />
  <Route path='/user/signup' element={<Signup/>} />
  <Route path='/user/account' element={<Account/>} />
</Routes>

    </div>
  );
}





export default App;
