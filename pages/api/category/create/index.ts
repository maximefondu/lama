import { Prisma } from '.prisma/client'
import { prisma } from '@libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import CategoryCreateInput = Prisma.CategoryCreateInput

const handler = async (request: NextApiRequest, response: NextApiResponse<CategoryCreateInput>) => {
    const category = await prisma.category.create({
        data: JSON.parse(request.body)
    })
    response.status(200).json(category)
}

export default handler
