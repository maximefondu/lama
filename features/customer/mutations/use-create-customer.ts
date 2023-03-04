import { useMutation } from 'react-query'
import { Prisma } from '.prisma/client'
import CustomerCreateInput = Prisma.CustomerCreateInput

const createCustomer = (data: CustomerCreateInput) => {
    return fetch('/api/customer/create', {
        method: 'POST',
        body: JSON.stringify(data)
    })
}
export const useCreateCustomer = () => useMutation(createCustomer)
