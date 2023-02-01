import { prisma } from '@libs/prisma'
import { Prisma } from '.prisma/client'
import CategoryFindManyArgs = Prisma.CategoryFindManyArgs

export const readCategories = (args: CategoryFindManyArgs = {}) => prisma.category.findMany(args)
