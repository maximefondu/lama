import { Prisma } from '.prisma/client'
import { prisma } from '@libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import CustomerCreateInput = Prisma.CustomerCreateInput

const handler = async (request: NextApiRequest, response: NextApiResponse<CustomerCreateInput>) => {
    const customer = await prisma.customer.create({
        data: JSON.parse(request.body)
    })
    response.status(200).json(customer)
}

export default handler
