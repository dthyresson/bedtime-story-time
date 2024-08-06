import type {
  QueryResolvers,
  MutationResolvers,
  AdjectiveRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const adjectives: QueryResolvers['adjectives'] = () => {
  return db.adjective.findMany()
}

export const adjective: QueryResolvers['adjective'] = ({ id }) => {
  return db.adjective.findUnique({
    where: { id },
  })
}

export const createAdjective: MutationResolvers['createAdjective'] = ({
  input,
}) => {
  return db.adjective.create({
    data: input,
  })
}

export const updateAdjective: MutationResolvers['updateAdjective'] = ({
  id,
  input,
}) => {
  return db.adjective.update({
    data: input,
    where: { id },
  })
}

export const deleteAdjective: MutationResolvers['deleteAdjective'] = ({
  id,
}) => {
  return db.adjective.delete({
    where: { id },
  })
}

export const Adjective: AdjectiveRelationResolvers = {
  story: (_obj, { root }) => {
    return db.adjective.findUnique({ where: { id: root?.id } }).story()
  },
}
