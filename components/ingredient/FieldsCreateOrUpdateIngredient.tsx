'use client'

import { UseFormReturn } from 'react-hook-form'

import { Group } from '@components/form/Group'
import { Field } from '@components/form/Field'
import { Select } from '@components/form/Select'
import { Button } from '@components/Button'

import { useReadCategories } from '@features/category/hooks/use-read-categories'
import { useReadUnits } from '@features/unit/hooks/use-read-units'

type Props = {
    useFormObject: UseFormReturn<any>
}

export const FieldsCreateOrUpdateIngredient = ({ useFormObject }: Props) => {
    const categories =
        useReadCategories().data?.map((category) => {
            return {
                name: category.name,
                value: category.id
            }
        }) ?? []

    const units =
        useReadUnits().data?.map((unit) => {
            return {
                name: unit.name,
                value: unit.id
            }
        }) ?? []

    return (
        <div className={'flex flex-col gap-12'}>
            <Group>
                <Field register={useFormObject.register} errors={useFormObject.formState.errors} label="Name" name="name" id="name" placeholder="Sugar" />
                <Select
                    register={useFormObject.register}
                    errors={useFormObject.formState.errors}
                    label="Unit"
                    name="unit"
                    id="unit"
                    options={units}
                    placehoder={'Choose unit'}
                />
            </Group>
            <Group>
                <Select
                    register={useFormObject.register}
                    errors={useFormObject.formState.errors}
                    label="Category"
                    name="category"
                    id="category"
                    options={categories}
                    placehoder={'Choose category'}
                />
            </Group>
            <Button className={'w-full'} type={'submit'}>
                Save
            </Button>
        </div>
    )
}

export default FieldsCreateOrUpdateIngredient
