import React from 'react'
import { connect } from '@cerebral/react'
import { signal } from 'cerebral/tags'

const IncreaseButton = connect(
  {
    increaseClicked: signal`increaseClicked`
  },
  ({increaseClicked, by}) => {
    const value = by || 1
    return (
      <button onClick={() => increaseClicked({value})}>+ {value}</button>
    )
  }
)
IncreaseButton.displayName = 'IncreaseButton'

export default IncreaseButton
