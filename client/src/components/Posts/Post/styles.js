import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "1.5rem",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "2rem",
    left: "2rem",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "2rem",
    right: "2rem",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "2rem",
  },
  title: {
    padding: "0 1.6rem",
  },
  cardActions: {
    padding: "0 1.6rem .8rem 1.6rem",
    display: "flex",
    justifyContent: "space-between",
  },
});
