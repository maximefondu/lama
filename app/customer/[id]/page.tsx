import { readCustomer } from '@features/customer/queries/read-customer'

import { Title } from '@components/Title'
import { Box } from '@components/Box'

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
            <Box>test</Box>
        </div>
    )
}
