import { Route, IndexRoute } from 'react-router';
import React from 'react'

import App from './containers/App'
import Article from './containers/Article'


// 无状态（stateless）组件，一个简单的容器，react-router 会根据 route
// 规则匹配到的组件作为 `props.children` 传入
const Container = (props) => {
  return (
    <div>{props.children}</div>
  );
};


// route 规则：
// - `/list` 显示 `List` 组件
// - `/item/:id` 显示 `Item` 组件
const routes = (
  <Route path="/" component={Container} >
    <IndexRoute component={App} />
    <Route path="article" component={Article} />
  </Route>
);

export default routes;
