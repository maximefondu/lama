'use client'

import { Prisma } from '.prisma/client'
import CategoryCreateInput = Prisma.CategoryCreateInput
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCreateCategory } from '@features/category/hooks/use-create-category'
import { schemaCreateCategory } from '@features/category/schema/create-category'

import { Box } from '@components/Box'
import { Title } from '@components/Title'
import { FieldsCreateOrUpdateCategory } from '@components/category/FieldsCreateOrUpdateCategory'

export default function Page() {
    const { mutateAsync: createCategory } = useCreateCategory()
    const useFormObject = useForm({
        defaultValues: {
            name: ''
        },
        resolver: zodResolver(schemaCreateCategory())
    })

    const onSubmit: SubmitHandler<CategoryCreateInput> = async (data) => {
        await createCategory(data)
    }

    return (
        <div className={'max-w-xs'}>
            <Title link={{ title: 'Category list', href: '/category' }}>Create category</Title>
            <Box>
                <form onSubmit={useFormObject.handleSubmit(onSubmit)}>
                    <FieldsCreateOrUpdateCategory useFormObject={useFormObject} />
                </form>
            </Box>
        </div>
    )
}
