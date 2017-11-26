import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";

import Event from "./Event";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class ArtistEvents extends Component {
  render() {
    const { eventsList } = this.props;
    return (
      <Grid container spacing={16} alignItems="center">
        {" "}
        {eventsList.length > 0 ? (
          <Grid container spacing={16} alignItems="center">
            <Grid item xs={12}>
              <Typography type="headline" gutterBottom align="center">
                Upcoming Events
              </Typography>
            </Grid>
            {eventsList.map(item => (
              <Grid key={item.id} item xs={12} sm={4}>
                <Event event={item} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Typography type="headline" gutterBottom align="center">
              No upcoming events found
            </Typography>
          </Grid>
        )}
      </Grid>
    );
  }
}

ArtistEvents = withStyles(styles)(ArtistEvents);

const mapStateToProps = (state, ownProps) => {
  return {
    eventsList: state.artists.eventsList
  };
};

ArtistEvents = connect(mapStateToProps, {})(ArtistEvents);

export default ArtistEvents;
