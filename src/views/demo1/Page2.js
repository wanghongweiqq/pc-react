
import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class StatementManagement extends Component {
  static propTypes = {
    history: PropTypes.array,
  }
  constructor (props) {
    super(props)
    this.state = {
      a: props
    }
  }
  componentDidMount () {
    console.log('this.props')
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <p>Page2</p>
        <button onClick={() => {
          this.props.history.push({
            pathname: '/demo2',
            query: {
              a: 222222
            },
          })
        }}>跳转demo2</button>
      </div>

    )
  }
}

