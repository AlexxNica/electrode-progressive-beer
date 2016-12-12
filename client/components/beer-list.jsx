import React, {PropTypes} from "react";
import {AboveTheFoldOnlyServerRender} from "above-the-fold-only-server-render";
import {GridList} from "material-ui/GridList";
import BeerCard from "./beer-card";

const ABOVE_THE_FOLD_MIN = 0;
const ABOVE_THE_FOLD_MAX = 99;
const styles = {
  gridList: {
    width: "95%"
  }
};

export class BeerList extends React.Component {
  render() {
    return (
      <div>
        {this.renderBeerCards(ABOVE_THE_FOLD_MIN, ABOVE_THE_FOLD_MAX)}

        <AboveTheFoldOnlyServerRender>
          {this.renderBeerCards(ABOVE_THE_FOLD_MAX)}
        </AboveTheFoldOnlyServerRender>
      </div>
    );
  }

  renderBeerCards(start, end) {
    const beerCards = this.props.beers.slice(start, end).map((beer, i) =>
      <BeerCard key={i} beer={beer} from={this.props.from}/>);

    return (
      <GridList cellHeight={300} style={styles.gridList} cols={3}>
        {beerCards}
      </GridList>
    );
  }
}

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
  from: PropTypes.string
};

BeerList.defaultProps = {
  beers: []
};

export default BeerList;
