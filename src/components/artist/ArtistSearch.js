import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";

import ArtistDetails from "./ArtistDetails";
import { loadArtist, loadEvents } from "../../actions/artistActions";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class ArtistSearch extends Component {
  state = {
    artistName: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  clickSearch = () => {
    const artistName = this.state.artistName;
    this.props.loadArtist(artistName).then(({ type, payload }) => {
      if (type === "LOAD_ARTIST_SUCCESS") {
        this.props.loadEvents(artistName);
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={16} alignItems="center">
        <Grid item xs={12} sm={11}>
          <TextField
            id="artistName"
            label="Artist Name"
            fullWidth
            className={classes.textField}
            value={this.state.artistName}
            onChange={this.handleChange("artistName")}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button raised color="primary" onClick={this.clickSearch}>
            Search
          </Button>
        </Grid>
        {this.props.artistSelected && (
          <ArtistDetails
            artist={this.props.artistSelected}
            events={this.props.eventsList}
          />
        )}
      </Grid>
    );
  }
}

ArtistSearch = withStyles(styles)(ArtistSearch);

const mapStateToProps = (state, ownProps) => {
  return {
    artistSelected: state.artists.artistSelected,
    eventsList: state.artists.eventsList
  };
};

ArtistSearch = connect(mapStateToProps, { loadArtist, loadEvents })(
  ArtistSearch
);

export default ArtistSearch;
