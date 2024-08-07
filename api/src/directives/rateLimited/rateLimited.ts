import { Ratelimit } from '@unkey/ratelimit'

import { AuthenticationError } from '@redwoodjs/graphql-server'
import {
  createValidatorDirective,
  ValidatorDirectiveFunc,
} from '@redwoodjs/graphql-server'

import { logger } from 'src/lib/logger'

const ratelimit = new Ratelimit({
  rootKey: process.env.UNKEY_ROOT_KEY,
  namespace: 'bedtime-storytime',
  limit: 20,
  duration: '1m',
  async: true,
})

export const schema = gql`
  """
  Use @rateLimited to validate access to a field, query or mutation.
  """
  directive @rateLimited(identifier: String!) on FIELD_DEFINITION
`

const validate: ValidatorDirectiveFunc = async ({ context, directiveArgs }) => {
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
    'currentUser in rateLimited directive'
  )

  // You can also modify your directive to take arguments
  // and use the directiveArgs object provided to this function to get values
  // See documentation here: https://redwoodjs.com/docs/directives
  logger.debug(directiveArgs, 'directiveArgs in rateLimited directive')

  const limit = await ratelimit.limit(directiveArgs.identifier)
  if (!limit.success) {
    throw new AuthenticationError('Too busy. Try again later.')
  }

  return
}

const rateLimited = createValidatorDirective(schema, validate)

export default rateLimited
