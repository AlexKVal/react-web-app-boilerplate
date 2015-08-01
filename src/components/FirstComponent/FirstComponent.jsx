import './FirstComponent.css'
import React, { PropTypes } from 'react'

/**
 * A stub component
 */
const FirstComponent = React.createClass({
  propTypes: {
    /**
     * Just string value
     */
    propValue: PropTypes.string
  },

  getDefaultProps () {
    return {
      propValue: 'value'
    }
  },

  render () {
    const { propValue } = this.props
    return (
      <h1 className='first-component'>
        FirstComponent and propValue: {propValue}
      </h1>
    )
  }
})

export default FirstComponent
