import Home  from  "./components/pages/home/Home";
import React from "react";
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import TopBar from "./components/top-bar/TopBar";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import UserID from "./components/pages/userList/userId/UserID";

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route  path="/"   element={<Navigate to="/Home"/>}></Route>
          <Route  path="/Home"   element={<Home/>}/>
          <Route  path="/users"   element={<UserList/>}/>
          <Route  path="/users/:id"   element={<UserID/>}/>
        </Routes>

        


      </div>
      

     
    </BrowserRouter>
  );
};

export default App;
