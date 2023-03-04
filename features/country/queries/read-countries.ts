import { prisma } from '@libs/prisma'
import { Prisma } from '.prisma/client'
import CountryFindManyArgs = Prisma.CountryFindManyArgs

export const readCountries = (args: CountryFindManyArgs = {}) => prisma.country.findMany(args)
