import React from 'react'
import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'

const DecreaseButton = connect(
  {
    decreaseClicked: signal`decreaseClicked`
  },
  ({decreaseClicked}) => (
    <button onClick={() => decreaseClicked()}>-1</button>
  )
)
DecreaseButton.displayName = 'DecreaseButton'

export default DecreaseButton
