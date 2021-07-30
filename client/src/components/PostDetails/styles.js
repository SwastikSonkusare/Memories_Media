import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "600px",
  },
  card: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gridGap: "1rem",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      textAlign: "center",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
  },
  imageSection: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gridTemplateColumns: "1fr",
      textAlign: "center",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  commentsOuterContainer: {
    display: "flex",
    gridGap: "1rem",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  commentsInnerContainer: {
    height: "200px",
    overflowY: "auto",
    overflowX: "hidden",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));
