import React from 'react'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'

const Counter = connect(
  {
    count: state`count`
  },
  ({count}) => (
    <span>{count}</span>
  )
)
Counter.displayName = 'Counter'

export default Counter
