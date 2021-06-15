import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Components
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Schedules from "./pages/Schedules/Schedules";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/schedules">
            <Schedules />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
