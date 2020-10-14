import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import PostList from "./PostList";
import Post from "./Post";
import usePosts from "./usePosts.hook";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

export default function App() {
  const classes = useStyles();
  const [post, setPost] = useState();
  const { loading, posts } = usePosts();

  const handleSelectPost = p => setPost(p);

  const handleBackToList = p => setPost(undefined);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Learning React
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {loading ? (
              <div style={{ width: "100%", textAlign: "center" }}>
                <CircularProgress />
              </div>
            ) : post ? (
              <Post post={post} onBack={handleBackToList} />
            ) : (
              <PostList posts={posts} onSelectPost={handleSelectPost} />
            )}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
