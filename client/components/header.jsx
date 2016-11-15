import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import {Card, CardMedia, CardTitle} from "material-ui/Card";
import BeerImg from "../images/beer.jpg";

const styles = {
  overlayContentStyle: {
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0)"
  },
  appBarStyle: {
    backgroundColor: "rgba(0,0,0,0)"
  },
  BeerImgCard: {
    position: "absolute",
    top: "0"
  }
};

const Header = () => (
  <div>
    <AppBar
      title="Progressive Beer"
      style={styles.appBarStyle}
      iconElementLeft={<IconButton></IconButton>}
      iconElementRight={
        <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{horizontal: "right", vertical: "top"}}
          anchorOrigin={{horizontal: "right", vertical: "top"}}
        >
          <MenuItem primaryText="Home" href="/"/>
          <MenuItem primaryText="About" href="/about" />
        </IconMenu>
      }
    />

    <Card style={styles.BeerImgCard}>
      <CardMedia
        overlay={
          <CardTitle
            title="Progressive Beer" subtitle="The Ultimate Guide to Beer all around the World" />
        }
        overlayContentStyle={styles.overlayContentStyle}
      >
        <img src={BeerImg} />
      </CardMedia>
    </Card>
  </div>
);

export default Header;
