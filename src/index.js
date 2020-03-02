import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.scss'

import Landing from './pages/landing-page/landing'

const Navigator = (
  <BrowserRouter>
    <Route path="/" component={Landing} />
  </BrowserRouter>
)

ReactDOM.render(Navigator, document.getElementById('root'))
