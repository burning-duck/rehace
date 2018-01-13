import { Rehace } from '../src'
import controller from './controller'
// Components to register
import Counter from './components/Counter'
import IncreaseButton from './components/IncreaseButton'
import DecreaseButton from './components/DecreaseButton'

export const app = Rehace({
  controller: controller,
  components: {
    'Counter': Counter,
    'IncreaseButton': IncreaseButton,
    'DecreaseButton': DecreaseButton
  }
})
