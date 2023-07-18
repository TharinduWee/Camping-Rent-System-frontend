// import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

import { Books } from './pages/Books';
import { Add } from './pages/Add';
import { Update } from './pages/Update';
import { Login1 } from './pages/Login1';
// import { NavBar } from './components/NavBar';
import HomePage from './pages/HomePage';
import {ItemCategories} from './pages/ItemCategories';
import {UserRegForm} from './pages/UserRegForm';
// import { NavBar } from "./components/NavBar";





function App() {
  return (
    
    <div className="App">
      {/* <NavBar /> */}
      
      <BrowserRouter>
        <Routes>
          
          {/* <Route path="/" element={<NavBar/>}/> */}
          
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<Books/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update" element={<Update/>}/>
          <Route path="/login" element={<Login1/>}/>
          <Route path="/itemcat" element={<ItemCategories/>}/>
          <Route path="/userregform" element={<UserRegForm/>}/>
         
          
        </Routes>
        {/* <h1>Trekpin Camping Tents</h1> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
