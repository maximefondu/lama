import * as z from 'zod'

export const schemaCreateCategory = () => {
    return z.object({
        name: z
            .string({
                invalid_type_error: 'Name is not a string !'
            })
            .min(1, 'Name is required !')
    })
}
