import { Ratelimit } from '@unkey/ratelimit'
export const StoryWriterRatelimit = new Ratelimit({
  rootKey: process.env.UNKEY_ROOT_KEY,
  namespace: process.env.UNKEY_NAMESPACE,
  limit: 20,
  duration: '1m',
  async: true,
})
