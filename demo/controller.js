import { Controller, Module } from 'cerebral'

function increase ({module, props}) {
  const value = props.value || 1
  module.set('count', module.get('count') + value)
}

function decrease ({module}) {
  module.set('count', module.get('count') - 1)
}

const controller = Controller(Module({
  state: {
    count: 0
  },
  signals: {
    increaseClicked: [increase],
    decreaseClicked: [decrease]
  }
}))

export default controller
