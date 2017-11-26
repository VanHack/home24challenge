import React from "react";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import faceBookLogo from "../../images/facebook-icon.png";
import bandsInTownLogo from "../../images/bandsintown.png";

import ArtistEvents from "./ArtistEvents";

const styles = theme => ({
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 10,
    width: 180,
    height: 180
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "auto",
    background: theme.palette.background.paper
  },
  table: {
    height: 600
  },
  imgLogo: {
    height: 35,
    width: 35
  }
});

function ArtistDetails(props) {
  const { artist, classes, events } = props;
  return (
    <Grid item xs={12}>
      {artist.noArtistFound ? (
        "Artist not found"
      ) : (
        <Grid container spacing={16}>
          <Grid item xs={12} sm={2}>
            <Grid container spacing={16} alignItems="center">
              <Grid item xs={12}>
                <Avatar
                  alt={artist.name}
                  src={artist.thumb_url}
                  className={classes.avatar}
                />
              </Grid>
              <Grid item sx={12} sm={4} />
              {artist.facebook_page_url !== "" && (
                <Grid item xs={12} sm={2}>
                  <a href={artist.facebook_page_url} target="_blank">
                    <img
                      src={faceBookLogo}
                      className={classes.imgLogo}
                      alt={artist.facebook_page_url}
                    />
                  </a>
                </Grid>
              )}
              {artist.url !== "" && (
                <Grid item xs={12} sm={2}>
                  <a href={artist.url} target="_blank">
                    <img
                      src={bandsInTownLogo}
                      className={classes.imgLogo}
                      alt={artist.url}
                    />
                  </a>
                </Grid>
              )}
              <Grid item sx={12} sm={4} />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10}>
            {events.length > 0 ? (
              <Grid item xs={12}>
                <Typography type="headline" gutterBottom align="center">
                  Upcoming Events
                </Typography>
                <div className={classes.root}>
                  <Grid container spacing={16} alignItems="center">
                    <Grid item xs={12} className={classes.table}>
                      <ArtistEvents />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            ) : (
              <Grid item xs={12}>
                <Typography type="headline" gutterBottom align="center">
                  No upcoming events found
                </Typography>
              </Grid>
            )}

            {/* <Grid container spacing={16}>
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
            </Grid> */}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default withStyles(styles)(ArtistDetails);
