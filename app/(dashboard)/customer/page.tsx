import { Title } from '@components/Title'
import { readCustomers } from '@features/customer/queries/read-customers'
import { Box } from '@components/Box'
import { EditLink } from '@components/EditLink'
import { ButtonRemoveCustomer } from '@components/customer/ButtonRemoveCustomer'

export default async function Page() {
    const customers = await readCustomers()

    return (
        <div className={'max-w-md'}>
            <Title button={{ title: 'Add customer', href: '/customer/create' }}>Customers</Title>

            {customers.length > 0 ? (
                <ul className={'flex flex-col gap-4'}>
                    {customers.map((customer) => {
                        return (
                            <li key={customer.id}>
                                <Box className={'flex justify-between bg-white rounded px-12 py-8'}>
                                    <span className={'text-md font-medium'}>{customer.firstname}</span>
                                    <div className={'flex items-center gap-10'}>
                                        <EditLink href={`/customer/${customer.id}`} />
                                        <ButtonRemoveCustomer id={customer.id} />
                                    </div>
                                </Box>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <Box className={'px-12 py-8'}>
                    <p>Not found !</p>
                </Box>
            )}
        </div>
    )
}
