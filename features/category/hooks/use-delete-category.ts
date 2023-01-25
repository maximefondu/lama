import { useMutation } from 'react-query'

const deleteCategory = (id: number | string) => {
    return fetch(`/api/category/${id}/delete`, {
        method: 'DELETE'
    })
}
export const useDeleteCategory = () => useMutation(deleteCategory)
