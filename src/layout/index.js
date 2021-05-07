import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Detail extends Component {
  render() {
    return (
      <div className="content">
        <div className="parent">
          <p>公共部分</p>
          <p><Link to="/about/page2">1嵌套路由1</Link></p>
          <p><Link to="/about/page3">2嵌套路由2</Link></p>
        </div>
        <div className="children">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default withRouter(Detail)
