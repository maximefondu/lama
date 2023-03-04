import { readCategory } from '@features/category/queries/read-category'

import { Title } from '@components/Title'
import { Box } from '@components/Box'
import { FormUpdateCategory } from '@components/category/FormUpdateCategory'

type Props = {
    params: {
        id: string
    }
}

export default async function Page({ params }: Props) {
    const category = await readCategory(Number(params.id))

    return (
        <div className={'max-w-xs'}>
            <Title link={{ title: 'Categories', href: '/category' }}>{category.name}</Title>
            <Box>
                <FormUpdateCategory category={category} />
            </Box>
        </div>
    )
}
