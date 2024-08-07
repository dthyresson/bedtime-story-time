import {
  ColorsResolver,
  ColorResolver,
  CreateColorResolver,
  UpdateColorResolver,
  DeleteColorResolver,
  ColorTypeResolvers,
} from 'types/colors'

import { db } from 'src/lib/db'

export const colors: ColorsResolver = async () => {
  return db.color.findMany({ orderBy: { name: 'asc' } })
}

export const color: ColorResolver = async ({ id }) => {
  return db.color.findUnique({
    where: { id },
  })
}

export const createColor: CreateColorResolver = async ({ input }) => {
  return db.color.create({
    data: input,
  })
}

export const updateColor: UpdateColorResolver = async ({ id, input }) => {
  return db.color.update({
    data: input,
    where: { id },
  })
}

export const deleteColor: DeleteColorResolver = async ({ id }) => {
  return db.color.delete({
    where: { id },
  })
}

export const Color: ColorTypeResolvers = {
  story: (_obj, { root }) => {
    return db.color.findUnique({ where: { id: root?.id } }).story()
  },
}
