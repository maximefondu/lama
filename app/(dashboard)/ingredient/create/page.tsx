'use client'

import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import IngredientCreateInput = Prisma.IngredientCreateInput

import { Title } from '@components/Title'
import { Box } from '@components/Box'
import FieldsCreateOrUpdateIngredient from '@components/ingredient/FieldsCreateOrUpdateIngredient'
import { Prisma } from '.prisma/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaCreateIngredient } from '@features/ingredient/schema/create-ingredient'
import { useCreateIngredient } from '@features/ingredient/mutations/use-create-ingredient'

const Page = () => {
    const router = useRouter()
    const { mutateAsync: createIngredient } = useCreateIngredient()

    const useFormObject = useForm({
        defaultValues: {
            name: '',
            unit: '',
            category: ''
        },
        resolver: zodResolver(schemaCreateIngredient())
    })

    const onSubmit: SubmitHandler<IngredientCreateInput> = async (data) => {
        await createIngredient(data)
    }

    return (
        <div className={'max-w-md'}>
            <Title link={{ title: 'Ingredients', href: '/ingredient' }}>Add ingredient</Title>
            <Box>
                <form onSubmit={useFormObject.handleSubmit(onSubmit)}>
                    <FieldsCreateOrUpdateIngredient useFormObject={useFormObject} />
                </form>
            </Box>
        </div>
    )
}

export default Page
