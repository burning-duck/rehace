import ReactHabitat from 'react-habitat'

/**
 * The Bootstrapper implementation of React-Habitat.
 */
export class RehaceBootstrapper extends ReactHabitat.Bootstrapper {
  constructor (containerBuilder) {
    super()
    this.setContainer(containerBuilder.build())
  }
}
