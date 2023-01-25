import { readCategories } from '@features/category/queries/read-categories'

import { Title } from '@components/Title'
import { EditLink } from '@components/EditLink'
import { ButtonRemoveCategory } from '@components/category/ButtonRemoveCategory'

export default async function Page() {
    const categories = await readCategories()

    return (
        <div>
            <Title button={{ title: 'Add category', href: '/category/create' }}>Category List</Title>

            <ul className={'flex flex-col gap-4'}>
                {categories.map((category) => {
                    return (
                        <li key={category.id} className={'flex justify-between bg-white rounded px-12 py-8'}>
                            <span className={'text-md font-medium'}>{category.name}</span>
                            <div className={'flex items-center gap-4'}>
                                <EditLink href={`/category/${category.id}`} />
                                <ButtonRemoveCategory id={category.id} />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
