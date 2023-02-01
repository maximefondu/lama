'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Category } from '.prisma/client'

import { schemaUpdateCategory } from '@features/category/schema/update-category'
import { useUpdateCategory } from '@features/category/hooks/use-update-category'

import { FieldsCreateOrUpdateCategory } from '@components/category/FieldsCreateOrUpdateCategory'

type Props = {
    category: Category
}

export const FormUpdateCategory = ({ category }: Props) => {
    const { mutateAsync: updateCategory } = useUpdateCategory()

    const useFormObject = useForm({
        defaultValues: category,
        resolver: zodResolver(schemaUpdateCategory)
    })

    const onSubmit: SubmitHandler<Category> = async (data) => {
        await updateCategory(data)
    }

    return (
        <form onSubmit={useFormObject.handleSubmit(onSubmit)}>
            <FieldsCreateOrUpdateCategory useFormObject={useFormObject} />
        </form>
    )
}
