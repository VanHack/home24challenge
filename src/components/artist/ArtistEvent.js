import React, { Component } from "react";
import { connect } from "react-redux";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import moment from "moment";
import { withStyles } from "material-ui/styles";

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

class ArtistEvent extends Component {
  state = {
    page: 0,
    rowsPerPage: 5
  };
  handleChangePage = (event, page) => {
    this.setState(() => ({ page }));
  };

  handleChangeRowsPerPage = event => {
    this.setState(() => ({ rowsPerPage: event.target.value }));
  };

  render() {
    const { classes } = this.props;
    const { page, rowsPerPage } = this.state;
    return (
      <div>
        {" "}
        {this.props.eventsList.length > 0 ? (
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Venue</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Country</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.eventsList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(item => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell>
                          {moment(item.datetime).format("MMM Do YY")}
                        </TableCell>
                        <TableCell>{item.venue.name}</TableCell>
                        <TableCell>{item.venue.city}</TableCell>
                        <TableCell>{item.venue.country}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    count={this.props.eventsList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </Paper>
        ) : (
          <Typography type="title" gutterBottom align="center">
            No upcoming events found
          </Typography>
        )}
      </div>
    );
  }
}

ArtistEvent = withStyles(styles)(ArtistEvent);

const mapStateToProps = (state, ownProps) => {
  return {
    eventsList: state.artists.eventsList
  };
};

ArtistEvent = connect(mapStateToProps, {})(ArtistEvent);

export default ArtistEvent;
