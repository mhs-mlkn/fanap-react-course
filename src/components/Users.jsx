import React from "react";
import withData from "./withData";

export function Users({ data = [] }) {
  return (
    <ul>
      {data.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

const WithData = withData("/users")(Users);
export default WithData;
