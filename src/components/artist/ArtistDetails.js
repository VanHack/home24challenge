import React from "react";
import Grid from "material-ui/Grid";

function ArtistDetails({ artist }) {
  return (
    <Grid item xs={12}>
      {artist.noArtistFound ? "Artist not found" : artist.name}
    </Grid>
  );
}

export default ArtistDetails;
