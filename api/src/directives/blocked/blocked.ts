import {
  AuthenticationError,
  createValidatorDirective,
  ValidatorDirectiveFunc,
} from '@redwoodjs/graphql-server'

import { logger } from 'src/lib/logger'

export const schema = gql`
  """
  Use @blocked to validate access to a field, query or mutation.
  """
  directive @blocked on FIELD_DEFINITION
`

const validate: ValidatorDirectiveFunc = ({ context, directiveArgs }) => {
  /**
   * Write your validation logic inside this function.
   * Validator directives do not have access to the field value, i.e. they are called before resolving the value
   *
   * - Throw an error, if you want to stop executing e.g. not sufficient permissions
   * - Validator directives can be async or sync
   * - Returned value will be ignored
   */

  // currentUser is only available when auth is setup.
  logger.debug(
    { currentUser: context.currentUser },
    'currentUser in blocked directive'
  )

  // You can also modify your directive to take arguments
  // and use the directiveArgs object provided to this function to get values
  // See documentation here: https://redwoodjs.com/docs/directives
  logger.debug(directiveArgs, 'directiveArgs in blocked directive')

  throw new AuthenticationError(
    'You are not authorized to access this resource'
  )
}

const blocked = createValidatorDirective(schema, validate)

export default blocked
