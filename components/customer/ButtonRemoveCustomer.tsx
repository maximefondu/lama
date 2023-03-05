'use client'

import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

import { useDeleteCustomer } from '@features/customer/hooks/use-delete-customer'

import DeleteIcon from '@svg/delete.svg'

type Props = {
    id: number | string
}
export const ButtonRemoveCustomer = ({ id }: Props) => {
    const router = useRouter()
    const { mutateAsync: deleteCustomer } = useDeleteCustomer()

    const remove = async () => {
        await deleteCustomer(id)
        router.refresh()
        toast.success('Customer delete !')
    }

    return (
        <button onClick={remove}>
            <DeleteIcon className={'w-7 fill-grey-600 transition-colors hover:fill-error'} />
        </button>
    )
}
