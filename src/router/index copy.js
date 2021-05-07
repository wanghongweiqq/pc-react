// import Page1 from '../container/Page1';
import React from 'react';
import {Router,Route,Switch,Link} from 'react-router-dom';
import { createHashHistory } from "history";
import demo1 from './routes/demo1';
const history = createHashHistory();

// const routes=[
//   ...demo1
// ]

export const RouterSub=(route1,i)=>{
    return (
    <Route key={i} path={route1.path} exact
    render = {
      props =>(
          <route1.component {...props} routes = {route1.routes}/>
      )}
    />

    )
  }

console.log('demo1')
console.log(demo1)
class RouterConfig extends React.Component{
  constructor(props) {
    super(props)
    }
    
    render(){
        return(
          <div>
          {/* <ul>
        </ul> */}
            <Router history={history}>
          {demo1.map((val,index)=>{
              return(
              <li key={index}>
              <Link to={val.path}>{val.title}</Link>
              </li>
              )
              })
            }
                <Switch>
                  {
                    demo1.map((route1, i) => {
                      console.log('route1')
                      console.log(route1)
                      console.log(route1.routes)
                      return RouterSub(route1,i)
                    })
                  }

                    {/* <Route path='/' exact render={()=>(
                        <Redirect to='/Page1'/>
                    )}/> */}
                    {/* <Route path='/Page1' component={Page1}/> */}
                </Switch>
            </Router>
            </div>
        )
    }
}
export default RouterConfig;