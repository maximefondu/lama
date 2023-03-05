import { readCustomer } from '@features/customer/queries/read-customer'

import { Title } from '@components/Title'
import { Box } from '@components/Box'
import { FormUpdateCustomer } from '@components/customer/FormUpdateCustomer'

type Props = {
    params: {
        id: string
    }
}
export default async function Page({ params }: Props) {
    const customer = await readCustomer(Number(params.id))

    return (
        <div className={'max-w-xs'}>
            <Title link={{ title: 'Customers', href: '/customer' }}>{`${customer.firstname} ${customer.lastname}`}</Title>
            <Box>
                <FormUpdateCustomer customer={customer} />
            </Box>
        </div>
    )
}
