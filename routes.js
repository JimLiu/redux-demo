import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'
import VideoList from './containers/VideoList'
import VideoDetail from './containers/VideoDetail'

export default (
    <Route path="/" component={App}>
      <Route path="/home"
             component={Home} />
      <Route path="/about"
             component={About} />
      <Route path="/videos"
             component={VideoList} />
      <Route path="/videos/:id"
             component={VideoDetail} />
    </Route>
)
