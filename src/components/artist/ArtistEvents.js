import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "material-ui/Grid";
import Event from "./Event";

class ArtistEvents extends Component {
  render() {
    const { eventsList } = this.props;
    return (
      <Grid container spacing={8} alignItems="center">
        {eventsList.map(item => (
          <Grid key={item.id} item xs={12} sm={4}>
            <Event event={item} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    eventsList: state.artists.eventsList
  };
};

export default connect(mapStateToProps, {})(ArtistEvents);
