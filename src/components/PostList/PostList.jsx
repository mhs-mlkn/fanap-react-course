import React from "react";
import Grid from "@material-ui/core/Grid";
import { PostCard } from "../Post";

const PostList = ({ posts, onSelectPost }) => {
  return posts.map(post => (
    <Grid item key={post.id} xs={12} sm={6} md={4}>
      <PostCard post={post} onSelect={onSelectPost} />
    </Grid>
  ));
};

export default PostList;
