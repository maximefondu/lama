import { prisma } from '@libs/prisma'

export const readCategories = () => prisma.category.findMany()
