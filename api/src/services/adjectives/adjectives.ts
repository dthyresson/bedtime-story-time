import {
  AdjectivesResolver,
  AdjectiveResolver,
  CreateAdjectiveResolver,
  UpdateAdjectiveResolver,
  DeleteAdjectiveResolver,
  AdjectiveTypeResolvers,
} from 'types/adjectives'

import { db } from 'src/lib/db'

export const adjectives: AdjectivesResolver = () => {
  return db.adjective.findMany({ orderBy: { name: 'asc' } })
}

export const adjective: AdjectiveResolver = ({ id }) => {
  return db.adjective.findUnique({
    where: { id },
  })
}

export const createAdjective: CreateAdjectiveResolver = ({ input }) => {
  return db.adjective.create({
    data: input,
  })
}

export const updateAdjective: UpdateAdjectiveResolver = ({ id, input }) => {
  return db.adjective.update({
    data: input,
    where: { id },
  })
}

export const deleteAdjective: DeleteAdjectiveResolver = ({ id }) => {
  return db.adjective.delete({
    where: { id },
  })
}

export const Adjective: AdjectiveTypeResolvers = {
  story: (_obj, { root }) => {
    return db.adjective.findUnique({ where: { id: root?.id } }).story()
  },
}
