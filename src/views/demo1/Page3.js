
import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Page3 extends Component {
  static propTypes = {
    history: PropTypes.object,
  }
  static defaultProps = {
    history: [],
  }

  componentDidMount (props) {
    console.log('this.props')
    console.log(this.props)
  }
  componentWillMount () {

  }
  componentWillUpdate () {

  }
  componentWillReceiveProps (next) {
    console.log(next)
  }
  render () {
    return (
      <div>
        <p>Page3 </p>
        <button onClick={() => {
          // this.props.history.push({
          //   pathname: '/about/page2',
          //   query: {
          //     a: 222222
          //   },
          // })
        }}>跳转page2</button>
      </div>
    )
  }
}

