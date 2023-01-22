'use client'

import { Box } from '@components/Box'
import { Field } from '@components/form/Field'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Prisma } from '.prisma/client'
import CategoryCreateInput = Prisma.CategoryCreateInput
import { useCreateCategory } from '../../../features/categories/hooks/use-create-category'
import { Button } from '@components/Button'

const schema = z.object({
    name: z.string().min(1, { message: 'Required' })
})

export default function Page() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: ''
        },
        resolver: zodResolver(schema)
    })

    const { mutateAsync: createCategory, isSuccess } = useCreateCategory()
    const onSubmit: SubmitHandler<CategoryCreateInput> = async (data) => {
        await createCategory(data)
    }

    return (
        <>
            <h1 className={'text-2xl font-bold mb-20'}>Create category</h1>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        register={register}
                        label="Name"
                        name="name"
                        id="name"
                        placeholder="Fish"
                    ></Field>
                    <Button className={'w-full mt-8'} type={'submit'}>
                        Validate
                    </Button>
                </form>
            </Box>
        </>
    )
}
