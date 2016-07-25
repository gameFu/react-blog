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
          <h1 className="blog-title">gameFu</h1>
          <h2 className="blog-description">Implement your dreams, only after you know you're their designer</h2>
          <a href="/" className="btn">Back to Overview</a>
        </div>
      </div>
    )
  }
}

export default ArticleButtomComponent
