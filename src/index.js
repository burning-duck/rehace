import RehaceContainer from './RehaceContainer'
import RehaceBootstrapper from './RehaceBootstrapper'

/**
 * Create the integraton between the used Frameworks.
 */
function Rehace (configuration) {
  const container = RehaceContainer(configuration)
  return new RehaceBootstrapper(container)
}

export default Rehace
