import React from "react";
import MenuNews from "./Menu";
import Noticias from "./Noticias";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuNews></MenuNews>
        <Switch>
          <Route path="/"></Route>
        </Switch>
        <Noticias></Noticias>
      </div>
    </Router>
  );
}

export default App;
