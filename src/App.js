import { useState, React } from "react";
import { MyContext } from "./Mycontext";
import MyComponent from "./MyComponent";

// import ReactDOM from 'react-dom';
// import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



// import Button from '@material-ui/core/Button';
import './App.css';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [text, setText] = useState("");

  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item one</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item two</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item three</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <>
      <div>
      <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
    {/* <Container fixed>

         <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    <h1>button</h1>
  
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
      </Container> */}

    </>
  );
}
export default App;
