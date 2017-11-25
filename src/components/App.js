import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";

import ArtistSearch from "./artist/ArtistSearch";
import ArtistEvent from "./artist/ArtistEvent";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: "100%"
  },
  flex: {
    flex: 1
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit" className={classes.flex}>
                Home24 Challenge
              </Typography>
            </Toolbar>
          </AppBar>
          <Route exact path="/" component={ArtistSearch} />
          <Route exact path="/events" component={ArtistEvent} />
        </div>
      </Router>
    );
  }
}

App = withStyles(styles)(App);

export default App;
