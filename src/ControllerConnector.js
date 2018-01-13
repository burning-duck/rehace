import React from 'react'
import { Container } from '@cerebral/react'

/**
 * Create a HOC factory for the given Cerebral controller.
 *
 * The factory wraps the given component in a Cerebral/React container and assigns the controller instance.
 */
export function ControllerConnector (controller) {
  return function ControllerConnectorHocFactory (Component) {
    return function RemaceHocContainer (props) {
      return (
        <Container controller={controller}>
          <Component {...props} />
        </Container>
      )
    }
  }
}
