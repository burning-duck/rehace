# rehace

React-Habitat-Cerebral: Components for HTML

Connects React-Habitat components to a single Cerebral controller.

## Basic Usage

You can find a simple demo using the [Counter example](http://cerebraljs.com/docs/get_started/counter.html) from the cerebral sitein the [/demo](/demo) folder of this repo.
See the working example at [https://burning-duck.github.io/rehace/](https://burning-duck.github.io/rehace/).


The main difference is, that you don't render your root Components into the page.
Just register them in an React-Habitat container for later use.

ReHaCe wraps each registered component in an Cerebral container using controller instance you passed in.
This allows each component to connect to the same state.

index.js
```js
import { Rehace } from 'rehace'

// This is the Cerebral controller
import controller from './controller'

// Components to register
import Counter from './components/Counter'
import IncreaseButton from './components/IncreaseButton'
import DecreaseButton from './components/DecreaseButton'

export const app =  Rehace(Module{
  controller: controller,
  components: {
    'Counter': Counter,
    'IncreaseButton': IncreaseButton,
    'DecreaseButton': DecreaseButton
  }
})
```

In your HTML file you can use React-Habitat syntax to use the components.

index.html
```html
<p>
    The current count is <strong><span data-component="Counter"></span></strong>.<br/>
    You can increase the counter: <span data-component="IncreaseButton"></span>.<br/>
    You can descrease the counter: <span data-component="DecreaseButton"></span>.<br/>
</p>
```

## Read more

- [Cerebral](http://cerebraljs.com/)
- [React-Habitat](https://github.com/DeloitteDigitalAPAC/react-habitat/)
