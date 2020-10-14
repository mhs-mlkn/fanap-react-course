import React from "react";
import { Route, Link } from "react-router-dom";

export default function Home({ history, match }) {
  const handleClick = () => {
    history.push("/user");
  };

  return (
    <div>
      <button onClick={handleClick}>User</button>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to={`${match.url}/social`}>Social</Link>
        </li>
        <li>
          <Link to={`${match.url}/economy`}>Economy</Link>
        </li>
        <li>
          <Link to={`${match.url}/politics`}>Politics</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:name`} component={CategoryItem} />
    </div>
  );
}

function CategoryItem(props) {
  return <h2>{props.match.params.name}</h2>;
}
