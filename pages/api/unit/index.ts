import { readUnits } from '@features/unit/queries/read-units'
import { NextApiRequest, NextApiResponse } from 'next'
import { Unit } from '.prisma/client'

const handler = async (request: NextApiRequest, response: NextApiResponse<Unit[]>) => {
    response.json(await readUnits())
}

export default handler
