import { Prisma } from '.prisma/client'
import { prisma } from '@libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import CustomerDeleteArgs = Prisma.CustomerDeleteArgs

const handler = async (request: NextApiRequest, response: NextApiResponse<CustomerDeleteArgs>) => {
    await prisma.customer.delete({
        where: { id: Number(request.query.id) }
    })
    response.status(200).end()
}

export default handler
