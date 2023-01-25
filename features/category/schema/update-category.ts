import * as z from 'zod'

export const schemaUpdateCategory = () => {
    return z.object({
        id: z.number({
            required_error: 'ID is required',
            invalid_type_error: 'ID is not a number'
        }),
        name: z
            .string({
                required_error: 'Name is required',
                invalid_type_error: 'Name is not a string'
            })
            .trim()
    })
}
