'use client'

import { useDeleteCategory } from '@features/category/hooks/use-delete-category'

type Props = {
    id: number | string
}
export const ButtonRemoveCategory = ({ id }: Props) => {
    const { mutateAsync: deleteCategory } = useDeleteCategory()
    return <button onClick={() => deleteCategory(id)}>Remove</button>
}
