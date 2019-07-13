import React from 'react'
import { WithStyles, createStyles } from '@material-ui/core'
import { Theme, withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

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

interface MainMenuProps extends WithStyles<typeof styles> {
  anchor?: HTMLElement
  handle: Function
  open: boolean
}

class MainMenu extends React.PureComponent<MainMenuProps, {}> {
  handleClose = (...args: any[]) => {
    console.log('close', args)
  }

  render() {
    const { classes, open, anchor } = this.props

    return (
      <Menu
        open={open}
        keepMounted
        anchorEl={anchor}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleClose}>menu A</MenuItem>
        <MenuItem onClick={this.handleClose}>menu B</MenuItem>
      </Menu>
    )
  }
}

export default withStyles(styles)(MainMenu)
