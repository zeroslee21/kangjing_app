import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import About2 from "./routes/About2";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import Kang from "./routes/Kang";
import About from "./routes/About";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Route path="/" exact={true} component={Kang}></Route>
      <Route path="/About2" component={About2} />
      <Route path="/About" component={About} />
      <Route path="/detail" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
