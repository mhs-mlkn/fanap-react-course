import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopBar from "./TopBar";
import Main from "./Main";
import UserProfile from "./UserProfile";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <Main>
        <UserProfile />
      </Main>
    </React.Fragment>
  );
}
