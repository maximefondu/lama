import { NextApiRequest, NextApiResponse } from 'next'
import { Category } from '.prisma/client'
import { readCategories } from '@features/category/queries/read-categories'

const handler = async (request: NextApiRequest, response: NextApiResponse<Category[]>) => {
    response.json(await readCategories())
}

export default handler
