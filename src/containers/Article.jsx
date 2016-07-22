import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as DemoActions from '../actions/demo'

import ArticleComponent from '../components/articleComponent'


class Article extends Component {
  render (){
    return (
      <ArticleComponent/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Article)
