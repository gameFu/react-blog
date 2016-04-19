import React, { Component, PropTypes } from 'react'

require ("../style/blog-header.scss");

class BlogHeaderComponent extends Component {
  render (){
    let teaserimageUrl = this.props.teaserimageUrl;
    let user_avatar_imageUrl = this.props.user_avatar_imageUrl;
    let teaserimageStyle = {
      backgroundImage: teaserimageUrl
    }
    let user_avatarStyle = {
      backgroundImage: user_avatar_imageUrl
    }
    return (
      <div className="blog-header">
        <a href = "#" className="logo-readium">
          <i className="fa fa-home">
          </i>
        </a>
        <div className="teaserimage">
          <div className="teaserimage-image" style= {teaserimageStyle}>
        </div>
        </div>
        <div className="user_avatar" className="user_avatar" style= {user_avatarStyle} >
        </div>
        <div className="blog-font">
          <h1 className="blog-title">gameFu</h1>
          <h2 className="blog-description">Implement your dreams, only after you know you're their designer</h2>
          <a href="https://github.com/gameFu" className="github-icon"><i className="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
    )
  }
}

BlogHeaderComponent.PropTypes = {
  teaserimageUrl: PropTypes.string.isRequired,
  user_avatar_imageUrl: PropTypes.string.isRequired
}

BlogHeaderComponent.defaultProps = {
  teaserimageUrl: "url('/src/assets/images/home-bg-01.jpeg')",
  user_avatar_imageUrl: "url('/src/assets/images/user_avatar.jpeg')"
}

export default BlogHeaderComponent;
