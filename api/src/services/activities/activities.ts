import {
  ActivitiesResolver,
  ActivityResolver,
  CreateActivityResolver,
  UpdateActivityResolver,
  DeleteActivityResolver,
  ActivityTypeResolvers,
} from 'types/activities'

import { db } from 'src/lib/db'

export const activities: ActivitiesResolver = async () => {
  return db.activity.findMany({ orderBy: { name: 'asc' } })
}

export const activity: ActivityResolver = async ({ id }) => {
  return db.activity.findUnique({
    where: { id },
  })
}

export const createActivity: CreateActivityResolver = async ({ input }) => {
  return db.activity.create({
    data: input,
  })
}

export const updateActivity: UpdateActivityResolver = async ({ id, input }) => {
  return db.activity.update({
    data: input,
    where: { id },
  })
}

export const deleteActivity: DeleteActivityResolver = async ({ id }) => {
  return db.activity.delete({
    where: { id },
  })
}

export const Activity: ActivityTypeResolvers = {
  story: (_obj, { root }) => {
    return db.activity.findUnique({ where: { id: root?.id } }).story()
  },
}
