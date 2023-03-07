import { useQuery } from 'react-query'
import { Category } from '.prisma/client'

const readCategories = async (): Promise<Category[]> => {
    const response = await fetch('/api/category', {
        method: 'GET'
    })

    return response.json()
}
export const useReadCategories = () =>
    useQuery({
        queryKey: ['categories'],
        queryFn: readCategories
    })
