import React, { Component } from 'react'

require ("../style/article_buttom.scss");

class ArticleButtomComponent extends Component {
  render(){
    let buttomeImage = {
        backgroundImage: "url('/src/assets/images/article-buttom.jpg')"
    }

    return(
      <div className="buttom-closer">
        <div className="buttom-closer-image" style={buttomeImage}>Image</div>
        <div className="inner">
          <h1 className="bolg-title">gameFu</h1>
        </div>
      </div>
    )
  }
}

export default ArticleButtomComponent
