import React, { Component } from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme =>
  createStyles({
    error: {
      height: `calc(100vh - 64px)`
    },
    main: {
      padding: theme.spacing(2)
    }
  });

class Main extends Component {
  state = {
    error: null
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render = () => {
    const { classes, children } = this.props;
    if (this.state.error) {
      return (
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.error}
        >
          <Typography variant="h3" color="error">
            An Error Occured, Try Agian
          </Typography>
        </Grid>
      );
    }
    return <main className={classes.main}>{children}</main>;
  };
}

export default withStyles(styles)(Main);
