import { readCountries } from '@features/country/queries/read-countries'
import { NextApiRequest, NextApiResponse } from 'next'
import { Country } from '.prisma/client'

const handler = async (request: NextApiRequest, response: NextApiResponse<Country[]>) => {
    response.json(await readCountries())
}

export default handler
