import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  title: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  },
  content: { flexGrow: 1 },
  description: {
    display: "-webkit-box",
    WebkitLineClamp: 10,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  }
}));

const Post = ({ post, onSelect }) => {
  const classes = useStyles();

  const handleClick = () => onSelect(post);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar title={post.author}>{post.author[0]}</Avatar>}
        title={post.title}
        titleTypographyProps={{ title: post.title }}
        subheader={moment(post.created).format("dddd, MMMM Do YYYY")}
        classes={{ title: classes.title }}
      />
      <CardMedia
        className={classes.media}
        image={`/postImages/${post.id}.png`}
        title={post.title}
      />
      <CardContent className={classes.content}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button color="primary" onClick={handleClick} size="small">
          read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
