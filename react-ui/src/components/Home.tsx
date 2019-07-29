import React from 'react'
import { WithStyles, createStyles } from '@material-ui/core'
import { Theme, withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const styles = (theme: Theme) => createStyles({})

interface HomeProps extends WithStyles<typeof styles> {}

class Home extends React.PureComponent<HomeProps, {}> {
  render() {
    const { classes } = this.props

    return (
      <Container>
        <span>WOOT</span>
      </Container>
    )
  }
}

export default withStyles(styles)(Home)
