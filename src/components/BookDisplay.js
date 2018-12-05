import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function BookDisplay(props) {
  const { classes,library } = props;
  // var { library } = this.props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={280} cols={3} className={classes.gridList}>
        <GridListTile key="Subheader" cols={6} style={{ height: 'auto' }}>
          <ListSubheader component="div">gBooks:</ListSubheader>
        </GridListTile>
        {library.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile["Book Cover URL"]} alt={tile.title} />
            <GridListTileBar
              title={tile["Book Title"]}
              subtitle={<span>by: {tile["Author 1 First Name"] + tile["Author 1 Last Name"]}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

BookDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookDisplay);

