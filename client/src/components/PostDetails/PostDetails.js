import React, { useEffect } from "react";
import {
  Paper,
  Divider,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";

import { useToasts } from "react-toast-notifications";

import { getPost, getPostsBySearch } from "../../actions/posts";

import useStyles from "./styles";
import CommentSection from "./CommentSection";

const PostDetails = () => {
  const { posts, post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const { isPostUpdated, isPostCreated } = useSelector((state) => state.posts);
  const { addToast } = useToasts();

  useEffect(() => {
    dispatch(getPost(id));
    dispatch(getPostsBySearch({ tags: post?.tags.join(",") }));
  }, [id, post?._id]);

  if (!post) return null;

  if (isPostUpdated) {
    addToast("Updated Successfully", {
      appearance: "success",
      autoDismiss: true,
    });
  }

  if (isPostCreated) {
    addToast("Created Successfully", {
      appearance: "success",
      autoDismiss: true,
    });
  }

  const openPost = (_id) => {
    history.push(`/posts/${_id}`);
  };

  const recomendedPosts =
    posts.length && posts.filter(({ _id }) => _id !== post._id);

  return (
    <>
      {isLoading ? (
        <Paper elevation={6} className={classes.loadingPaper}>
          <CircularProgress size="7em" />
        </Paper>
      ) : (
        <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
          <div className={classes.card}>
            <div className={classes.section}>
              <Typography variant="h3" component="h2">
                {post.title}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                color="textSecondary"
                component="h2"
              >
                {post.tags.map((tag) => `#${tag} `)}
              </Typography>
              <Typography gutterBottom variant="h5" component="p">
                {post.message}
              </Typography>
              <Typography variant="h6">Created by: {post.name}</Typography>
              <Typography variant="h6" color="primary">
                {moment(post.createdAt).fromNow()}
              </Typography>
              {/* <Divider style={{ margin: "20px 0" }} /> */}
              {/* <Typography variant="body1">
                <strong>Realtime Chat - coming soon!</strong>
              </Typography> */}
              <Divider style={{ margin: "20px 0" }} />
              <CommentSection post={post} />
              <Divider style={{ margin: "20px 0" }} />
            </div>
            <div className={classes.imageSection}>
              <img
                className={classes.media}
                src={
                  post.selectedFile ||
                  "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
                alt={post.title}
              />
            </div>
          </div>
          {recomendedPosts.length ? (
            <div className={classes.section}>
              <Typography gutterBottom variant="h5">
                You might also like:
              </Typography>
              <Divider />
              <div className={classes.recommendedPosts}>
                {recomendedPosts.map(
                  ({ title, message, name, likes, selectedFile, _id }) => (
                    <div
                      style={{ margin: "20px", cursor: "pointer" }}
                      onClick={() => openPost(_id)}
                      key={_id}
                    >
                      <Typography gutterBottom variant="h5">
                        {title}
                      </Typography>
                      <Typography gutterBottom variant="h4">
                        {name}
                      </Typography>
                      <Typography gutterBottom variant="h5">
                        {message}
                      </Typography>
                      <Typography gutterBottom variant="h5">
                        Likes: {likes.length}
                      </Typography>
                      <img
                        src={selectedFile}
                        alt=""
                        style={{
                          width: "100%",
                          maxHeight: "500px",
                          display: "block",
                        }}
                      ></img>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </Paper>
      )}
    </>
  );
};

export default PostDetails;
