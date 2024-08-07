import {
  AnimalsResolver,
  AnimalResolver,
  CreateAnimalResolver,
  UpdateAnimalResolver,
  DeleteAnimalResolver,
  AnimalTypeResolvers,
} from 'types/animals'

import { db } from 'src/lib/db'

export const animals: AnimalsResolver = async () => {
  return db.animal.findMany({ orderBy: { name: 'asc' } })
}

export const animal: AnimalResolver = async ({ id }) => {
  return db.animal.findUnique({
    where: { id },
  })
}

export const createAnimal: CreateAnimalResolver = async ({ input }) => {
  return db.animal.create({
    data: input,
  })
}

export const updateAnimal: UpdateAnimalResolver = async ({ id, input }) => {
  return db.animal.update({
    data: input,
    where: { id },
  })
}
export const deleteAnimal: DeleteAnimalResolver = async ({ id }) => {
  return db.animal.delete({
    where: { id },
  })
}

export const Animal: AnimalTypeResolvers = {
  story: (_obj, { root }) => {
    return db.animal.findUnique({ where: { id: root?.id } }).story()
  },
}
