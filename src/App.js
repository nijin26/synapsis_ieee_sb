import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import ScrollRestoration from "react-scroll-restoration";

//Components
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Schedules from "./pages/Schedules/Schedules";

function App() {
  return (
    <Layout>
      <ScrollRestoration />
      <Switch>
        <Route exact path="/about" component={withRouter(AboutUs)} />
        <Route exact path="/schedules" component={withRouter(Schedules)} />
        <Route exact path="/" component={withRouter(Home)} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
