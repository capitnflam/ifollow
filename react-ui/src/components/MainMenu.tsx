import React from 'react'
import { WithStyles, createStyles } from '@material-ui/core'
import { Theme, withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Link from '@material-ui/core/Link'

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
  handle: Function
  open: boolean
}

interface MainMenuState {
  open: boolean
}

class MainMenu extends React.PureComponent<MainMenuProps, MainMenuState> {
  constructor(props: MainMenuProps) {
    super(props)
    this.state = { open: props.open }
  }

  componentWillReceiveProps(props: MainMenuProps) {
    this.setState({ ...this.state, open: props.open })
  }

  handleClose = (...args: any[]) => {
    this.setState({ open: false })
  }

  handleCollection = () => {
    const { handle } = this.props
    handle('collection')
  }

  handleConfiguration = () => {
    const { handle } = this.props
    handle('configuration')
  }

  handleLogout = () => {
    const { handle } = this.props
    handle('logout')
  }

  render() {
    const { classes } = this.props
    const { open } = this.state

    return (
      <Drawer open={open} anchor={'left'} onClose={this.handleClose}>
        <MenuItem onClick={this.handleCollection}>Manage collection</MenuItem>
        <MenuItem onClick={this.handleConfiguration}>Configuration</MenuItem>
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
      </Drawer>
    )
  }
}

export default withStyles(styles)(MainMenu)
