import { Switch, Route, Redirect } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

//Components
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";

const theme = createMuiTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
