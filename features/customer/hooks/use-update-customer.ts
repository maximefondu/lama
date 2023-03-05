import { useMutation } from 'react-query'
import { Customer } from '.prisma/client'

const updateCustomer = ({ id, ...data }: Customer) => {
    return fetch(`/api/customer/${id}/update`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
}
export const useUpdateCustomer = () => useMutation(updateCustomer)
