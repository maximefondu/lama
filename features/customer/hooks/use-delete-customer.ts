import { useMutation } from 'react-query'

const deleteCustomer = (id: number | string) => {
    return fetch(`/api/customer/${id}/delete`, {
        method: 'DELETE'
    })
}
export const useDeleteCustomer = () => useMutation(deleteCustomer)
