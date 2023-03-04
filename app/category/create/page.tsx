'use client'

import { Prisma } from '.prisma/client'
import CategoryCreateInput = Prisma.CategoryCreateInput
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'

import { useCreateCategory } from '@features/category/hooks/use-create-category'
import { schemaCreateCategory } from '@features/category/schema/create-category'

import { Box } from '@components/Box'
import { Title } from '@components/Title'
import { FieldsCreateOrUpdateCategory } from '@components/category/FieldsCreateOrUpdateCategory'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()
    const { mutateAsync: createCategory } = useCreateCategory()
    const useFormObject = useForm({
        defaultValues: {
            name: ''
        },
        resolver: zodResolver(schemaCreateCategory())
    })

    const onSubmit: SubmitHandler<CategoryCreateInput> = async (data) => {
        const response = await createCategory(data)

        if (response.status === 200) {
            toast.success('Category added !')
            router.push('/category')
        }
    }

    return (
        <div className={'max-w-xs'}>
            <Title link={{ title: 'Categories', href: '/category' }}>Create category</Title>
            <Box>
                <form onSubmit={useFormObject.handleSubmit(onSubmit)}>
                    <FieldsCreateOrUpdateCategory useFormObject={useFormObject} />
                </form>
            </Box>
        </div>
    )
}
