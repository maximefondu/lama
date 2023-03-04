'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { Prisma } from '.prisma/client'
import CustomerCreateInput = Prisma.CustomerCreateInput

import { Title } from '@components/Title'
import { Box } from '@components/Box'
import { FieldsCreateOrUpdateCustomer } from '@components/customer/FieldsCreateOrUpdateCustomer'
import { useCreateCustomer } from '@features/customer/mutations/use-create-customer'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaCreateCustomer } from '@features/customer/schema/create-customer'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()
    const { mutateAsync: createCustomer } = useCreateCustomer()
    const useFormObject = useForm({
        defaultValues: {
            firstname: '',
            lastname: '',
            company: '',
            vat_number: '',
            email: '',
            phone: '',
            address: '',
            zip: '',
            city: '',
            country: ''
        },
        resolver: zodResolver(schemaCreateCustomer())
    })

    const onSubmit: SubmitHandler<CustomerCreateInput> = async (data) => {
        const response = await createCustomer(data)

        if (response.status === 200) {
            toast.success('Customer added !')
            router.push('/customer')
        }
    }

    return (
        <div className={'max-w-md'}>
            <Title link={{ title: 'Customers', href: '/customer' }}>Add Customer</Title>

            <Box>
                <form onSubmit={useFormObject.handleSubmit(onSubmit)}>
                    <FieldsCreateOrUpdateCustomer useFormObject={useFormObject} />
                </form>
            </Box>
        </div>
    )
}
