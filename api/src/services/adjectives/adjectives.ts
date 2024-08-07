import {
  AdjectivesResolver,
  AdjectiveResolver,
  CreateAdjectiveResolver,
  UpdateAdjectiveResolver,
  DeleteAdjectiveResolver,
  AdjectiveTypeResolvers,
} from 'types/adjectives'

import { db } from 'src/lib/db'

export const adjectives: AdjectivesResolver = async () => {
  return db.adjective.findMany({ orderBy: { name: 'asc' } })
}

export const adjective: AdjectiveResolver = async ({ id }) => {
  return db.adjective.findUnique({
    where: { id },
  })
}

export const createAdjective: CreateAdjectiveResolver = async ({ input }) => {
  return db.adjective.create({
    data: input,
  })
}

export const updateAdjective: UpdateAdjectiveResolver = async ({
  id,
  input,
}) => {
  return db.adjective.update({
    data: input,
    where: { id },
  })
}

export const deleteAdjective: DeleteAdjectiveResolver = async ({ id }) => {
  return db.adjective.delete({
    where: { id },
  })
}

export const Adjective: AdjectiveTypeResolvers = {
  story: (_obj, { root }) => {
    return db.adjective.findUnique({ where: { id: root?.id } }).story()
  },
}
