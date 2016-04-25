import React, { Component, PropTypes } from 'react'

import BlogArticleComponent from "./blogArticleComponent"

require ("../style/blog-content.scss");

class BlogContentComponent extends Component {
  render() {
    let data = [
      {
        "postUrl": "#",
        "postTitle": "高并发订单池",
        "postDescription": "<p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p>"
      },
      {
        "postUrl": "#",
        "postTitle": "高并发订单池",
        "postDescription": "<p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p>"
      },
      {
        "postUrl": "#",
        "postTitle": "高并发订单池",
        "postDescription": "<p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p>"
      },
      {
        "postUrl": "#",
        "postTitle": "高并发订单池",
        "postDescription": "<p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p>"
      }
    ];
    return (
      <main className="content" role="main">
        <div className="cr">
          { data.map(function(d){
            return <BlogArticleComponent postUrl= {d.postUrl} postTitle= {d.postTitle} postDescription= {d.postDescription} />
          }) }
        </div>
      </main>
    )
  }
}

export default BlogContentComponent;
