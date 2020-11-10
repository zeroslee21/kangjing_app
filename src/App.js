import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import About2 from "./routes/About2";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import Kang from "./routes/Kang";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/About2" component={About2} />
      <Route path="/About" component={About} />
      <Route path="/detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
