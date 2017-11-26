import React, { Component } from "react";
import Card, { CardHeader, CardContent, CardActions } from "material-ui/Card";
import classnames from "classnames";
import Collapse from "material-ui/transitions/Collapse";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import Tooltip from "material-ui/Tooltip";
import IconButton from "material-ui/IconButton";
import ShoppingCart from "material-ui-icons/ShoppingCart";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import moment from "moment";
import Map from "../common/Map";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  flexGrow: {
    flex: "1 1 auto"
  }
});

class Event extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, event } = this.props;
    const tickets = event.offers.filter(
      item => item.type === "Tickets" && item.status === "available"
    );
    return (
      <Card className={classes.card}>
        <CardHeader
          title={event.venue.name}
          subheader={moment(event.datetime).format("LLL")}
        />

        <CardActions>
          {tickets.length > 0 && (
            <Tooltip title="Buy Tickets" placement="top">
              <a href={tickets[0].url} target="_blank">
                <IconButton>
                  <ShoppingCart />
                </IconButton>
              </a>
            </Tooltip>
          )}
          <div className={classes.flexGrow} />
          <Tooltip title="Click for more info" placement="top">
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="More info"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
        <Collapse
          in={this.state.expanded}
          transitionDuration="auto"
          unmountOnExit
        >
          <CardContent>
            <Map
              latitude={parseFloat(event.venue.latitude)}
              longitude={parseFloat(event.venue.longitude)}
            />
          </CardContent>
          <CardContent>
            <Typography type="caption">{event.venue.name}</Typography>

            <Typography type="caption">{event.venue.city}</Typography>

            <Typography type="caption">{event.venue.country}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Event = withStyles(styles)(Event);
export default Event;
