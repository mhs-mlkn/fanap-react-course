import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TopBar from "components/TopBar";
import Articles from "pages/Articles";
import AddArticle from "pages/AddArticle";

export default function Main() {
  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Switch>
          <Route exact path={["/", "/articles"]} component={Articles} />
          <Route exact path="/add" component={AddArticle} />
        </Switch>
      </Container>
    </>
  );
}
