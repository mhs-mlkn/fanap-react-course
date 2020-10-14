import React from "react";
import postArray from "./data.json";

export default function usePosts() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPosts(postArray);
      setLoading(false);
    }, 3000);
  }, []);

  return { loading, posts };
}
