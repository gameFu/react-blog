import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

class BlogArticleComponent extends Component{
  render(){
    return(
      <article className="article-post" itemScope itemType="http://schema.org/BlogPosting" role="article">
        <div className="article-item">
          <header className='post-header'>
            <h2 className='post-title' itemProp='name'>
              <Link to="/article">{this.props.postTitle}</Link>
            </h2>
          </header>
          <section className="post-excerpt" itemProp='description' dangerouslySetInnerHTML={parseDescription(this.props.postDescription)} >
          </section>
          <div className="post-time">
            <time dateTime="15 March 2016">15 March 2016</time>
          </div>
        </div>
      </article>
    )
  }
}

function parseDescription(postDescription){
  return { __html: postDescription }
}

BlogArticleComponent.PropTypes = {
  postUrl: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDescription: PropTypes.string.isRequired
}

BlogArticleComponent.defaultProps = {
  postUrl: "#",
  postTitle: "高并发订单池",
  postDescription: "<p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p>"
}

export default BlogArticleComponent
