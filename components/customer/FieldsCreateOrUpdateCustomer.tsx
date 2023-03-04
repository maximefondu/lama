'use client'

import { UseFormReturn } from 'react-hook-form'

import { Button } from '@components/Button'
import { Group } from '@components/form/Group'
import { Field } from '@components/form/Field'
import { Select } from '@components/form/Select'
import { useReadCountries } from '@features/country/queries/use-read-countries'

type Props = {
    useFormObject: UseFormReturn<any>
}

export const FieldsCreateOrUpdateCustomer = ({ useFormObject }: Props) => {
    const { data: countries } = useReadCountries()
    const countriesMapSelect =
        countries?.map((country) => {
            return {
                name: country.name,
                value: country.id
            }
        }) ?? []

    return (
        <div className={'flex flex-col gap-12'}>
            <Group>
                <Field
                    register={useFormObject.register}
                    errors={useFormObject.formState.errors}
                    label="Firstname"
                    name="firstname"
                    id="firstname"
                    placeholder="Yan"
                />
                <Field
                    register={useFormObject.register}
                    errors={useFormObject.formState.errors}
                    label="Lastname"
                    name="lastname"
                    id="lastname"
                    placeholder="Snow"
                />
            </Group>
            <Group>
                <Field
                    register={useFormObject.register}
                    errors={useFormObject.formState.errors}
                    label="Company"
                    name="company"
                    id="company"
                    placeholder="Onie"
                />
                <Field
                    register={useFormObject.register}
                    errors={useFormObject.formState.errors}
                    label="Vat number"
                    name="vat_number"
                    id="vat_number"
                    placeholder="0456.352.135"
                />
            </Group>
            <Group>
                <Field
                    register={useFormObject.register}
                    errors={useFormObject.formState.errors}
                    label="Email"
                    name="email"
                    id="email"
                    placeholder="yan.snow@gmail.com"
                />
                <Field
                    register={useFormObject.register}
                    errors={useFormObject.formState.errors}
                    label="Phone"
                    name="phone"
                    id="phone"
                    placeholder="0499/99.99.99"
                />
            </Group>
            <Group>
                <Field
                    register={useFormObject.register}
                    errors={useFormObject.formState.errors}
                    label="Address"
                    name="address"
                    id="address"
                    placeholder="Rue de la plaine, 9"
                />
                <Field register={useFormObject.register} errors={useFormObject.formState.errors} label="Zip" name="zip" id="zip" placeholder="6900" />
            </Group>
            <Group>
                <Field
                    register={useFormObject.register}
                    errors={useFormObject.formState.errors}
                    label="City"
                    name="city"
                    id="city"
                    placeholder="Marche-en-famenne"
                />
                <Select
                    register={useFormObject.register}
                    errors={useFormObject.formState.errors}
                    label="Country"
                    name="country"
                    id="country"
                    placehoder={'Choisir un pays'}
                    options={countriesMapSelect}
                />
            </Group>
            <Button className={'w-full'} type={'submit'}>
                Save
            </Button>
        </div>
    )
}
