import { Prisma } from '.prisma/client'
import { prisma } from '@libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import IngredientCreateInput = Prisma.IngredientCreateInput

const handler = async (request: NextApiRequest, response: NextApiResponse<IngredientCreateInput>) => {
    const ingredient = await prisma.ingredient.create({
        data: JSON.parse(request.body)
    })
    response.status(200).json(ingredient)
}

export default handler
