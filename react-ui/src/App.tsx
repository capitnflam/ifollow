import React from 'react'
import { Route } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import Header from './components/Header'
import Home from './components/Home'

const Foo = () => (
  <div>
    <span>Foobar</span>
  </div>
)

const Bar = () => (
  <div>
    <span>Barfoo</span>
  </div>
)

export default class App extends React.PureComponent {
  render() {
    return (
      <Container>
        <Header />
        <Box>
          <Route component={Home} exact path="/" />
          <Route component={Bar} exact path="/bar" />
        </Box>
      </Container>
    )
  }
}
/* <Route
component={containerize(item.component)}
exact={!!item.exact}
path={item.path}
strict={!!item.strict}
key={item.path}
/> */
