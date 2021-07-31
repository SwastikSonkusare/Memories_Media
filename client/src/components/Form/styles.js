import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      // fontSize: "1.5rem",
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  textField: {
    fontSize: "1.5rem",
  },
  fileInput: {
    width: "97%",
    margin: "1rem 0",
  },
  buttonSubmit: {
    fontSize: "1.3rem",
    marginBottom: 10,
    padding: "1.5rem",
  },
}));
