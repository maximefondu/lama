import { useQuery } from 'react-query'
import { Country } from '.prisma/client'

const readCountries = async (): Promise<Country[]> => {
    const response = await fetch('/api/country', {
        method: 'GET'
    })

    return response.json()
}
export const useReadCountries = () => {
    return useQuery({
        queryFn: readCountries
    })
}
