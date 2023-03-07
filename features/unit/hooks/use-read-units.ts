import { useQuery } from 'react-query'
import { Unit } from '.prisma/client'

const readUnits = async (): Promise<Unit[]> => {
    const response = await fetch('/api/unit', {
        method: 'GET'
    })

    return response.json()
}

export const useReadUnits = () =>
    useQuery({
        queryKey: ['units'],
        queryFn: readUnits
    })
