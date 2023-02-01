import { useMutation } from 'react-query'
import { Category } from '.prisma/client'

const updateCategory = ({ id, ...data }: Category) => {
    return fetch(`/api/category/${id}/update`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
}
export const useUpdateCategory = () => useMutation(updateCategory)
