import React from 'react';
import { HashRouter, Route, Switch, Router, BrowserRouter } from 'react-router-dom';
import { createHashHistory } from "history";
import demo1 from './routes/demo1';
import demo2 from './routes/demo2';
import { regExpSlash } from '../assets/js/regExp';
const history = createHashHistory();

const routes = [
  demo1,
  demo2
]

//该组件通过递归的方式，将所有route中带有children路由的父路由进行解构,最终用createBasicRoute函数来渲染
const createFixRoute = (route, index) => {
  route.path=`/${ route.path.replace(regExpSlash,'')}`
  const { path, children } = route;
  if (children) {
    return (
      <Route
        key={index}
        path={path}
        children={props => {
          // let redirectPath = null;
          return (
            <route.component {...props}>
              <Switch>
                {children.map((child, index2) => {
                  child.path=`/${ child.path.replace(regExpSlash,'')}`
                  const { path: childPath, redirect } = child;
                                    // if (redirect){
                  //   redirectPath = childPath;
                  // }
                  return createFixRoute({ ...child, path: path + childPath }, `${index}-${index2}`);
                })}
                {/* <Redirect from={`${path}`} to={`${path}${redirectPath || children[0].path}`} /> */}
              </Switch>
            </route.component>
          )
        }}
      />
    );
  } else {
    return createBasicRoute(route, index);
  }
};
// 最基础的Router用法
const createBasicRoute = (route, index) => {
  const { path } = route;
  return <Route exact={route.exact} key={index} path={path}
    render={props =>{
      return <route.component {...props}></route.component>
    }}
  />
}
// 基本的两层嵌套路由
const createRoute = (route, index) => {
  return (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      render={props => {
        if (route.children && route.children.length > 0) {
          return (
            <route.component props={props}>
              <Switch>
                {
                  route.children.map((child, i) => (
                    <Route
                      key={i}
                      path={child.path}
                      exact={child.exact}
                      component={child.component}
                    />
                  ))
                }
              </Switch>
            </route.component>
          )
        } else {
          return (
            <route.component props={props}></route.component>
          )
        }
      }}
    />
  )
}
class RouterConfig extends React.Component {
  render() {
    return (
      <HashRouter>
        {/* <BrowserRouter> */}
        {/* <Router history={history}> */}
        <Switch>
          {
            routes.map((route, index) => (
              createFixRoute(route, index)
              // createRoute(route, index)
            ))
          }
        </Switch>
        {/* </Router> */}
        {/* </BrowserRouter> */}
      </HashRouter>
    )
  }
}
export default RouterConfig;
