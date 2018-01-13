import { RehaceContainer } from './RehaceContainer'
import { RehaceBootstrapper } from './RehaceBootstrapper'

/**
 * Create the integraton between the used Frameworks.
 */
export function Rehace (configuration) {
  const container = RehaceContainer(configuration)
  return new RehaceBootstrapper(container)
}
