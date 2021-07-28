import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import ChipInput from "material-ui-chip-input";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";

import { getPosts, getPostsBySearch } from "../../actions/posts";
import Paginate from "../Pagination/Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const query = useQuery();

  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const classes = useStyles();

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  console.log(tags);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} md={3}>
            <AppBar
              className={classes.appBarSearch}
              color="inherit"
              position="static"
            >
              <TextField
                name="search"
                label="Search Memories"
                fullWidth
                value={search}
                onKeyPress={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}
                variant="outlined"
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags..."
                variant="outlined"
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                color="primary"
                size="large"
                variant="contained"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Paginate />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
