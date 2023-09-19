import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Memepage from "./Pages/Memepage"
import Login from './Pages/Login';
import Signup from './Pages/Signup';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Memepage/>}/>
          <Route path = "/signup" element= {<Signup/>}/>
          <Route path = "/login" element = {<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
