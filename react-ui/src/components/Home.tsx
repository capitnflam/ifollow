import React from 'react'
import { WithStyles, createStyles } from '@material-ui/core'
import { Theme, withStyles } from '@material-ui/core/styles'

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

interface HomeProps extends WithStyles<typeof styles> {}

class Home extends React.PureComponent<HomeProps, {}> {
  render() {
    const { classes } = this.props

    return (
      <div>
        <span>WOOT</span>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
