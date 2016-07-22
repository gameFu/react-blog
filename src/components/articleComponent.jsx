import React, { Component, PropTypes } from 'react'
import LogoReadiumComponent from './logoReadiumComponent'
import ArticleButtomComponent from './articleButtomComponent'

require ("../style/article.scss");

class ArticleComponent extends Component{
  render(){
    let articleStyle = {
      transform: "translate3d(0px, 0px, 0px); opacity: 1",
      backgroundImage: "url('/src/assets/images/article_bg.jpg')"
    };
    let author_image = {
      backgroundImage: "url('/src/assets/images/user_avatar.jpeg')"
    }
    return (
      <div>
        <main className='content' role="main">
        <LogoReadiumComponent/>
          <article className='post'>
           <div className='article-image' style= {articleStyle}>
           </div>
           <div className='post-meta'>
            <h1 className='post-title'>高并发订单池</h1>
            <div className='post-text-meta'>
              <div className='author-image' style={author_image}></div>
              <h4 className="author-name" itemProp="author" itemScope itemType="http://schema.org/Person">gameFu</h4>
               on
               <time dateTime="2016-03-15 20:47">15 Mar 2016</time>
            </div>
            <div className='down'>
              <a href="#article-center" className="topofpage">
              <i className="fa fa-angle-down">
              </i>
              </a>
            </div>
           </div>
           <section className='post-center' dangerouslySetInnerHTML={parseCenter(this.props.articleCenter)}>
           </section>
          </article>
        </main>
        <ArticleButtomComponent/>
      </div>
    );
  }
}

function parseCenter(articleCenter){
  return { __html: articleCenter }
}

ArticleComponent.PropTypes = {
  articleCenter: PropTypes.string.isRequired
}
ArticleComponent.defaultProps = {
  articleCenter: "<a name='article-center'></a><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p>"
}

export default ArticleComponent;
