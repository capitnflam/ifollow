import React from 'react'
import { WithStyles, createStyles } from '@material-ui/core'
import { Theme, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import LibraryAdd from '@material-ui/icons/LibraryAdd'
import MenuIcon from '@material-ui/icons/Menu'

import MainMenu from './MainMenu'

const styles = (theme: Theme) =>
  createStyles({
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

interface HeaderProps extends WithStyles<typeof styles> {}

interface HeaderState {
  mainMenu: { open: boolean; anchor?: HTMLElement }
}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)
    this.state = { mainMenu: { open: false } }
  }

  handleMenuClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    this.setState({ mainMenu: { open: true, anchor: event.currentTarget } })
  }

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
              onClick={this.handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <MainMenu
              open={this.state.mainMenu.open}
              anchor={this.state.mainMenu.anchor}
              handle={this.handleMenuClick}
            />
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
