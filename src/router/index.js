import React from 'react';
import { HashRouter, Route, Switch,Router,BrowserRouter } from 'react-router-dom';
import { createHashHistory } from "history";
import demo1 from './routes/demo1';
import Layout from '../App';
import '../App.css';

const history = createHashHistory();

class RouterConfig extends React.Component {

  render() {
    return (
      <div className="flex">
        <div className="left"><Layout /> </div>
        <div className="right">
          {/* <HashRouter> */}
          <BrowserRouter>
          {/* <Router history={history}> */}
            <Switch>
              { // 利用render 渲染子路由
                demo1.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    render={props => { // 利用render 方法处理
                      if (route.children && route.children.length > 0) {
                        return (
                          <div>
                            <route.component props={props}></route.component>
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
                          </div>
                        )
                      } else {
                        return (
                          <route.component props={props}></route.component>
                        )
                      }
                    }}
                  />
                ))
              }
            </Switch>
            {/* </Router> */}
            </BrowserRouter>
          {/* </HashRouter> */}
          {/* </Layout> */}
        </div>
      </div>
    )
  }
}
export default RouterConfig;
