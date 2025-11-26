import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <div>
      <Navbar />
      <div className="cards">
        <Card name={"Faisal"} age={23} profession={"Developer"} image={"https://randomuser.me/api/portraits/men/32.jpg"}/>
        <Card name={"khan"} age={33} profession={"farmer"} image={"https://randomuser.me/api/portraits/men/45.jpg"}/>
        <Card name={"ktk"} age={25} profession={"driver"} image={"https://randomuser.me/api/portraits/men/22.jpg"}/>
        <Card name={"mussi"} age={20} profession={"Designer"} image={"https://randomuser.me/api/portraits/men/15.jpg"}/>
        <Card name={"sheryar"} age={28} profession={"Developer"} image={"https://randomuser.me/api/portraits/men/66.jpg"}/>
        <Card name={"owais"} age={25} profession={"Developer"} image={"https://randomuser.me/api/portraits/men/12.jpg"}/>
      </div>
    </div>
  );
};

export default App;
