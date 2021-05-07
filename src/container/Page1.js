import React, { Component } from 'react'
import {withRouter,Link} from 'react-router-dom'
 
class Detail extends Component {
    render() {
        return (
          <div className="ccc">
            <div className="aaa">
          Detail页面
                <Link to="/about/about">1嵌套路由1</Link>
                <Link to="/about/Page3">2嵌套路由2</Link>
            </div>
            <div className="bbb">
            {this.props.children}
            </div>
            </div>
    )
    }
}
export default withRouter(Detail)
