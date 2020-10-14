import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopBar from "./TopBar";
import Home from "./Home";
import User from "./User";
import About from "./About";
import NotFound from "./NotFound";
import Protected from "./Protected";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

function Login() {
  return <h1>Login</h1>;
}

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <main style={{ margin: 50 }}>
        <h1>App</h1>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Switch>
            <Redirect from="/" to="/home" exact />
            <Route path="/home" component={Home} />
            <Protected path="/user" component={User} />
            <Route path="/about" children={() => <About />} />
            <Route path="/login" children={() => <Login />} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </main>
    </React.Fragment>
  );
}
