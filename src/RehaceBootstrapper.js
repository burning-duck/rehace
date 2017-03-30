import ReactHabitat from 'react-habitat'

/**
 * The Bootstrapper implementation of React-Habitat.
 */
class RehaceBootstrapper extends ReactHabitat.Bootstrapper {
  constructor (container) {
    super()
    this.setContainer(container)
  }
}

export default RehaceBootstrapper
