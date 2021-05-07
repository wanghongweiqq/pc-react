

import React, { Component } from 'react'
export default class Page3 extends Component {

  componentDidMount(props) {
    console.log('this.props')
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <p>Page3 </p>
        <button onClick={() => {
          this.props.history.push({
            pathname: '/about/page2',
            query: {
              a: 222222
            },
          })
        }}>跳转page2</button>
      </div>
    )
  }
}

