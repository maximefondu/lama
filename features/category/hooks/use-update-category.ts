import { useMutation } from 'react-query'

const updateCategory = (data) => {
    const id = data.id
    delete data.id

    return fetch(`/api/category/${id}/update`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
}
export const useUpdateCategory = () => useMutation(updateCategory)
