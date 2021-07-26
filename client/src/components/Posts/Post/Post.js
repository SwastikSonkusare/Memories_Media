import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import moment from "moment";

import ThumbAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h5">{post.creator}</Typography>
        <Typography variant="h5">{moment(post.createdAt).fromNow()}</Typography>
      </div>

      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant="h5" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h4" gutterBottom>
        {post.title}
      </Typography>

      <CardContent>
        <Typography variant="h4" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="large" color="primary" onClick={() => {}}>
          <ThumbAltIcon fontSize="large" />
          Like
          {post.likeCount}
        </Button>
        <Button size="large" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="large" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
