import { prisma } from '@libs/prisma'

export const readCustomer = (id: number | string) => {
    return prisma.customer.findUnique({
        where: {
            id: Number(id)
        },
        rejectOnNotFound: () => new Error('Customer not found !')
    })
}
