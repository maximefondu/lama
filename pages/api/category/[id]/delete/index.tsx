import { Prisma } from '.prisma/client'
import { prisma } from '@libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import CategoryDeleteArgs = Prisma.CategoryDeleteArgs

const handler = async (request: NextApiRequest, response: NextApiResponse<CategoryDeleteArgs>) => {
    await prisma.category.delete({
        where: { id: Number(request.query.id) }
    })
    response.status(200)
}

export default handler
