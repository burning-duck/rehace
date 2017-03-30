import { Controller } from 'cerebral'

function increase ({state, props}) {
  const value = props.value || 1
  state.set('count', state.get('count') + value)
}

function decrease ({state}) {
  state.set('count', state.get('count') - 1)
}

const controller = Controller({
  state: {
    count: 0
  },
  signals: {
    increaseClicked: [increase],
    decreaseClicked: [decrease]
  }
})

export default controller
