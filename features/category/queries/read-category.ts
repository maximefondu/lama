import { prisma } from '@libs/prisma'

export const readCategory = (id: number | string) => {
    return prisma.category.findUnique({
        where: {
            id: Number(id)
        },
        rejectOnNotFound: () => new Error('Category not found !')
    })
}
