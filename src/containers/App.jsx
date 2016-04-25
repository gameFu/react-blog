import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as DemoActions from '../actions/demo'

import BlogHeaderComponent from '../components/blogHeaderComponent'
import BlogContentComponent from '../components/blogContentComponent'
import DevTools from "./DevTools"

class App extends Component {
  render () {
    const { light } = this.props
    return (
      <div>
        <BlogHeaderComponent />
        <BlogContentComponent />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    light: state.light
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DemoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
