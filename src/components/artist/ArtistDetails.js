import React from "react";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";

import ArtistEvents from "./ArtistEvents";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 10,
    width: 220,
    height: 180
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
          <Grid item xs={12} sm={3}>
            <Avatar
              alt={artist.name}
              src={artist.thumb_url}
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={1}>
                <Typography type="body2" gutterBottom>
                  Artist
                </Typography>
              </Grid>
              <Grid item xs={12} sm={11}>
                <Typography gutterBottom>{artist.name}</Typography>
              </Grid>
              <Grid item xs={12} sm={1}>
                <Typography type="body2" gutterBottom>
                  Web Page
                </Typography>
              </Grid>
              <Grid item xs={12} sm={11}>
                <Typography gutterBottom>
                  <a href={artist.url} target="_blank">
                    {artist.url}
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={1}>
                <Typography type="body2" gutterBottom>
                  Facebook
                </Typography>
              </Grid>
              <Grid item xs={12} sm={11}>
                <Typography gutterBottom>
                  <a href={artist.facebook_page_url} target="_blank">
                    {artist.facebook_page_url}
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ArtistEvents />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default withStyles(styles)(ArtistDetails);
