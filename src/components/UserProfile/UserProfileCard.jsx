import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2)
    },
    avatar: {
      width: theme.spacing(16),
      height: theme.spacing(16),
      marginBottom: theme.spacing(1)
    }
  })
);

export default function UserProfileCard({ data }) {
  const classes = useStyles();
  const avatar =
    !!data.avatar && data.avatar.length > 0
      ? URL.createObjectURL(data.avatar[0])
      : undefined;

  return (
    <Paper elevation={3} className={classes.root}>
      <Avatar alt="user avatar" src={avatar} className={classes.avatar}>
        M
      </Avatar>
      <Typography variant="h5" gutterBottom>
        {data.firstName} {data.lastName}
      </Typography>
      <Typography variant="h6" gutterBottom color="textSecondary">
        {data.isEmailVisible && data.email}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {data.phone}
      </Typography>
      <Typography gutterBottom>{data.birthDate}</Typography>
      <Typography variant="body2" gutterBottom>
        {data.title}
      </Typography>
      <Typography variant="caption">{data.address}</Typography>
    </Paper>
  );
}
