import { prisma } from '@libs/prisma'
import { Prisma } from '.prisma/client'
import UnitFindManyArgs = Prisma.UnitFindManyArgs

export const readUnits = (args: UnitFindManyArgs = {}) => prisma.unit.findMany(args)
