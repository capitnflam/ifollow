import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import LibraryAdd from '@material-ui/icons/LibraryAdd'
import MenuIcon from '@material-ui/icons/Menu'

interface HeaderProps {
  classes: any
}

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  addButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
})

class Header extends React.PureComponent<HeaderProps, {}> {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              iFollow
            </Typography>
            <IconButton
              edge="end"
              className={classes.addButton}
              color="inherit"
              aria-label="Add"
            >
              <LibraryAdd />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
