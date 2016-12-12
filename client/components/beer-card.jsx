import React, {PropTypes} from "react";
import {Card, CardActions, CardMedia, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Divider from "material-ui/Divider";
import lightBeerImage from "../images/srm/light.jpg";
import amberBeerImage from "../images/srm/amber.jpg";
import darkBeerImage from "../images/srm/dark.jpg";

const srmThresholdMin = 10;
const srmThresholdMax = 10;
const styles = {
  card: {
    width: "250px",
    height: "240px"
  }
};

/*eslint brace-style: 0*/
export class BeerCard extends React.Component {
  render() {
    let beerImage = lightBeerImage;

    if (this.props.beer.srmMax > srmThresholdMin && this.props.beer.srmMax < srmThresholdMax) {
      beerImage = amberBeerImage;
    }
    else if (this.props.beer.srmMax > srmThresholdMax) {
      beerImage = darkBeerImage;
    }

    let routeUrl = `/beerstyle?style=${this.props.beer.id}`;
    if (this.props.from === "styles") {
      routeUrl = `/beerdetails?style=${this.props.beer.styleId}&beer=${this.props.beer.id}`;
    }

    return (
      <Card style={styles.card}>
        <CardMedia>
          <img src={beerImage} alt="Beer Icon" />
        </CardMedia>

        <CardText>
          {this.props.beer.name}
        </CardText>

        <Divider />

        <CardActions>
          <FlatButton label="LEARN MORE" href={routeUrl}/>
        </CardActions>
      </Card>
    );
  }
}

BeerCard.propTypes = {
  beer: PropTypes.object,
  from: PropTypes.string
};

BeerCard.defaultProps = {
  beer: {}
};

export default BeerCard;
