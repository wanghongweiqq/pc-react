import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Detail extends Component {
  render () {
    return (
      <div className="content">
        <div className="parent">
          <p>公共部分</p>
          {/* <p><Link to="/about/page2">page2</Link></p>
          <p><Link to="/about/page3">page3</Link></p> */}

          <button onClick={() => {
            this.props.history.push({
              pathname: '/about/page1/1',
            })
          }}>
            跳转page1
          </button>

          <button onClick={() => {
            this.props.history.push({
              pathname: '/about/page2',
              query: {
                a: 2
              },
              search: '3'
            })
          }}>
            跳转page2
          </button>
          <button onClick={() => {
            this.props.history.push({
              pathname: '/about/page3',
              state: {
                a: 3
              },
            })
          }}>
            跳转about3
          </button>
        </div>
        <div className="children">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default withRouter(Detail)
