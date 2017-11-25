import React from "react";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";
import { withStyles } from "material-ui/styles";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 10,
    width: 120,
    height: 120
  }
};

function ArtistDetails(props) {
  const { artist, classes } = props;
  return (
    <Grid item xs={12}>
      {artist.noArtistFound ? (
        "Artist not found"
      ) : (
        <Grid container spacing={16} alignItems="center">
          <Grid item xs={12} sm={2}>
            <Avatar
              alt={artist.name}
              src={artist.thumb_url}
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            {artist.name}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default withStyles(styles)(ArtistDetails);
