import ReactHabitat from 'react-habitat'
import { ControllerConnector } from './ControllerConnector'

/**
 * Create a ReactHabitat.Container.
 *
 * - Connects given Components to the Cerebral controller.
 * - Registers connected Components in a Habitat container.
 */
export function RehaceContainer ({controller, components}) {
  const connect = ControllerConnector(controller)
  const builder = new ReactHabitat.ContainerBuilder()

  Object.keys(components).forEach((key) => {
    const connectedComponent = connect(components[key])
    builder.register(connectedComponent).as(key)
  })

  return builder
}
