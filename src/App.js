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
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
