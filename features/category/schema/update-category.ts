import * as z from 'zod'

export const schemaUpdateCategory = z.object({
    id: z
        .number({
            invalid_type_error: 'ID is not a number'
        })
        .min(1, 'ID is required !'),
    name: z
        .string({
            invalid_type_error: 'Name is not a string'
        })
        .min(1, 'Name is required !')
        .trim()
})
