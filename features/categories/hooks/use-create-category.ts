import { Prisma } from '.prisma/client'
import CategoryCreateInput = Prisma.CategoryCreateInput
import { useMutation } from 'react-query'

const createCategory = (data: CategoryCreateInput) => {
    return fetch('/api/category/create', {
        method: 'POST',
        body: JSON.stringify(data)
    })
}
export const useCreateCategory = () => useMutation(createCategory)
