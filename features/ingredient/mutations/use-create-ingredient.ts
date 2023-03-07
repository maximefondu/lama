import { useMutation } from 'react-query'
import { Prisma } from '.prisma/client'
import IngredientCreateInput = Prisma.IngredientCreateInput

const createIngredient = (data: IngredientCreateInput) => {
    return fetch('/api/ingredient/create', {
        method: 'POST',
        body: JSON.stringify(data)
    })
}
export const useCreateIngredient = () => useMutation(createIngredient)
