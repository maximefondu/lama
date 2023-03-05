import { Prisma } from '.prisma/client'
import { prisma } from '@libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import CustomerUpdateInput = Prisma.CustomerUpdateInput

const handler = async (request: NextApiRequest, response: NextApiResponse<CustomerUpdateInput>) => {
    const customer = await prisma.customer.update({
        where: { id: Number(request.query.id) },
        data: JSON.parse(request.body)
    })
    response.status(200).json(customer)
}

export default handler
