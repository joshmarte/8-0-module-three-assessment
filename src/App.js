import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/">
          <h1>Welcome to GhibliApp</h1>
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
