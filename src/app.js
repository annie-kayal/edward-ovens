import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'

import 'bulma'
import './css/main.scss'

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route path='/' component={Home}></Route>
    </Switch>
  </BrowserRouter>
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)