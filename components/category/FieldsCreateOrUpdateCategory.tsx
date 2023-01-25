'use client'

import { UseFormReturn } from 'react-hook-form'

import { Field } from '@components/form/Field'
import { Button } from '@components/Button'

type Props = {
    useFormObject: UseFormReturn<any>
}

export const FieldsCreateOrUpdateCategory = ({ useFormObject }: Props) => {
    return (
        <>
            <Field register={useFormObject.register} errors={useFormObject.formState.errors} label="Name" name="name" id="name" placeholder="Fish"></Field>
            <Button className={'w-full mt-8'} type={'submit'}>
                Save
            </Button>
        </>
    )
}
