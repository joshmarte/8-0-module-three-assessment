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
        <Route path="/movies" component={Movies} />
        <Route path="/people" component={People} />
        <Route path="/locations" component={Locations} />
      </Switch>
    </div>
  );
}

export default App;
