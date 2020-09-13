import React from "react";
import { Header } from "./Component/Header/Header";
import { LaunchList } from "./Component/LaunchList/LaunchList";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Header />
      <LaunchList />
    </div>
  );
}

export default App;
