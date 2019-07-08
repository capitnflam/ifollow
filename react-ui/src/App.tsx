import React from 'react'
import Container from '@material-ui/core/Container'

import Header from './components/Header'

export default class App extends React.PureComponent {
  render() {
    return (
      <Container>
        <Header />
      </Container>
    )
  }
}
