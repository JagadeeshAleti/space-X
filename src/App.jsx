import React from "react";
import { Header } from "./Component/Header/Header";
import { Launch } from "./Component/Launch/Launch";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Launch
        banner="https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg"
        title="FalconSat"
        launchDate="2006-03-25T10:30:00+12:00"
        description="Description.........."
      />
      <Launch
        banner="https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg"
        title="FalconSat"
        launchDate="2006-03-25T10:30:00+12:00"
        description="Description.........."
      />
      <Launch
        banner="https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg"
        title="FalconSat"
        launchDate="2006-03-25T10:30:00+12:00"
        description="Description.........."
      />
    </div>
  );
}

export default App;
