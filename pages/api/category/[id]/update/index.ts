import { Prisma } from '.prisma/client'
import { prisma } from '@libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import CategoryUpdateInput = Prisma.CategoryUpdateInput

const handler = async (request: NextApiRequest, response: NextApiResponse<CategoryUpdateInput>) => {
    const category = await prisma.category.update({
        where: { id: Number(request.query.id) },
        data: JSON.parse(request.body)
    })
    response.status(200).json(category)
}

export default handler
