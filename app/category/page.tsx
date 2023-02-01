import { readCategories } from '@features/category/queries/read-categories'

import { Title } from '@components/Title'
import { EditLink } from '@components/EditLink'
import { Box } from '@components/Box'
import { ButtonRemoveCategory } from '@components/category/ButtonRemoveCategory'
import { SearchCategory } from '@components/category/SearchCategory'

type Props = {
    searchParams: Record<string, string>
}

export default async function Page({ searchParams }: Props) {
    const categories = await readCategories({
        where: {
            name: {
                contains: searchParams.search,
                mode: 'insensitive'
            }
        }
    })

    return (
        <div className={'max-w-md'}>
            <Title button={{ title: 'Add category', href: '/category/create' }}>Category List</Title>

            <SearchCategory />

            {categories.length > 0 ? (
                <ul className={'flex flex-col gap-4'}>
                    {categories.map((category) => {
                        return (
                            <li key={category.id}>
                                <Box className={'flex justify-between bg-white rounded px-12 py-8'}>
                                    <span className={'text-md font-medium'}>{category.name}</span>
                                    <div className={'flex items-center gap-10'}>
                                        <EditLink href={`/category/${category.id}`} />
                                        <ButtonRemoveCategory id={category.id} />
                                    </div>
                                </Box>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <Box className={'px-12 py-8'}>
                    <p>
                        Not found <strong>{searchParams.search}</strong> !
                    </p>
                </Box>
            )}
        </div>
    )
}
