'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Customer } from '.prisma/client'

import { FieldsCreateOrUpdateCustomer } from '@components/customer/FieldsCreateOrUpdateCustomer'
import { schemaUpdateCustomer } from '@features/customer/schema/update-customer'
import { useUpdateCustomer } from '@features/customer/hooks/use-update-customer'

type Props = {
    customer: Customer
}

export const FormUpdateCustomer = ({ customer }: Props) => {
    const { mutateAsync: updateCustomer } = useUpdateCustomer()

    const useFormObject = useForm({
        defaultValues: customer,
        resolver: zodResolver(schemaUpdateCustomer())
    })

    const onSubmit: SubmitHandler<Customer> = async (data) => {
        await updateCustomer(data)
    }

    return (
        <form onSubmit={useFormObject.handleSubmit(onSubmit)}>
            <FieldsCreateOrUpdateCustomer useFormObject={useFormObject} />
        </form>
    )
}
