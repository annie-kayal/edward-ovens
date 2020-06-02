import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './css/main.scss'

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route path='/' component={Home}></Route>
    </Switch>
  </BrowserRouter>
}

const Home = () => {
  return <main>
    <section className="navigation">
      <div className='nav'>
        <div className="logo">
          <h1>EO</h1>
        </div>
        <div className="hamburger-container">
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
      </div>
      <div className="mobile-nav">
        <ul>
          <li>HOME</li>
          <li>PORTFOLIO</li>
          <li>PRICES</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </section>
  </main>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)