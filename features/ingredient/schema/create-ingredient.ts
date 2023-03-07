import * as z from 'zod'

export const schemaCreateIngredient = () => {
    return z.object({
        name: z
            .string({
                invalid_type_error: 'Name is not a string !'
            })
            .min(1, 'Name is required !'),
        category: z
            .string({
                invalid_type_error: 'Category is not a string !'
            })
            .min(1, 'Category is required !'),
        unit: z
            .string({
                invalid_type_error: 'Unit is not a string !'
            })
            .min(1, 'Unit is required !')
    })
}
