'use client'

import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

import { useDeleteCategory } from '@features/category/hooks/use-delete-category'

import DeleteIcon from '@svg/delete.svg'

type Props = {
    id: number | string
}
export const ButtonRemoveCategory = ({ id }: Props) => {
    const router = useRouter()
    const { mutateAsync: deleteCategory } = useDeleteCategory()

    const remove = async () => {
        await deleteCategory(id)
        router.refresh()
        toast.success('Category delete !')
    }

    return (
        <button onClick={remove}>
            <DeleteIcon className={'w-7 fill-grey-600 transition-colors hover:fill-error'} />
        </button>
    )
}
