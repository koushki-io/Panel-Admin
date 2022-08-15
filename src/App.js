import Home  from  "./components/pages/home/Home";
import React from "react";
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import TopBar from "./components/top-bar/TopBar";

const App = () => {
  return (
    <div>
      <TopBar />

      <div className="container">
        <Sidebar/>

        <Home/>


      </div>
      

     
    </div>
  );
};

export default App;
