import {
  ColorsResolver,
  ColorResolver,
  CreateColorResolver,
  UpdateColorResolver,
  DeleteColorResolver,
  ColorTypeResolvers,
} from 'types/colors'

import { db } from 'src/lib/db'

export const colors: ColorsResolver = () => {
  return db.color.findMany({ orderBy: { name: 'asc' } })
}

export const color: ColorResolver = ({ id }) => {
  return db.color.findUnique({
    where: { id },
  })
}

export const createColor: CreateColorResolver = ({ input }) => {
  return db.color.create({
    data: input,
  })
}

export const updateColor: UpdateColorResolver = ({ id, input }) => {
  return db.color.update({
    data: input,
    where: { id },
  })
}

export const deleteColor: DeleteColorResolver = ({ id }) => {
  return db.color.delete({
    where: { id },
  })
}

export const Color: ColorTypeResolvers = {
  story: (_obj, { root }) => {
    return db.color.findUnique({ where: { id: root?.id } }).story()
  },
}
