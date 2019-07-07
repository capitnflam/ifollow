import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'

interface HeaderProps {}

export default class Header extends React.PureComponent<HeaderProps, {}> {
  render() {
    return (
      <Container>
        <AppBar>
          <h1>Foo</h1>
        </AppBar>
      </Container>
    )
  }
}
