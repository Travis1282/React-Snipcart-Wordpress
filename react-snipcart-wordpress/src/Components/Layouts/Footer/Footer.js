import React, { Component } from 'react';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';


export default class Footer extends Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="AddCart" value="Add to Cart" icon={<AddShoppingCart />} />
      </BottomNavigation>
    );
  }
}



