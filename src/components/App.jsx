import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TopBar from "components/TopBar";
import Articles from "pages/Articles";
import AddArticle from "pages/AddArticle";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <TopBar />
        <Container maxWidth="lg">
          <Switch>
            <Route exact path={["/", "/articles"]} component={Articles} />
            <Route exact path="/add" component={AddArticle} />
          </Switch>
        </Container>
      </Router>
    </React.Fragment>
  );
}
