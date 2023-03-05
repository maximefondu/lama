import * as z from 'zod'

export const schemaUpdateCustomer = () => {
    return z.object({
        id: z
            .number({
                invalid_type_error: 'ID is not a number'
            })
            .min(1, 'ID is required !'),
        firstname: z.string({
            invalid_type_error: 'Firstname is not a string !'
        }),
        lastname: z.string({
            invalid_type_error: 'Lastname is not a string !'
        }),
        company: z.string({
            invalid_type_error: 'Company is not a string !'
        }),
        vat_number: z.string({
            invalid_type_error: 'Vat number is not a string !'
        }),
        email: z.string({
            invalid_type_error: 'Email is not a string !'
        }),
        phone: z.string({
            invalid_type_error: 'Phone is not a string !'
        }),
        address: z.string({
            invalid_type_error: 'Address is not a string !'
        }),
        zip: z.string({
            invalid_type_error: 'Zip is not a string !'
        }),
        city: z.string({
            invalid_type_error: 'City is not a string !'
        }),
        country: z.string({
            invalid_type_error: 'Country is not a string !'
        })
    })
}
