import { prisma } from '@libs/prisma'
import { Prisma } from '.prisma/client'
import CustomerFindManyArgs = Prisma.CustomerFindManyArgs

export const readCustomers = (args: CustomerFindManyArgs = {}) => prisma.customer.findMany(args)
