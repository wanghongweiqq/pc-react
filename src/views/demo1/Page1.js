
import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Page1 extends Component {
  static propTypes = {
    history: PropTypes.array,
  }

  componentDidMount (props) {
    console.log('this.props')
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <p>Page1 </p>
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

