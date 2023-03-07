import { Title } from '@components/Title'

const Page = () => {
    return (
        <div className={'max-w-md'}>
            <Title button={{ title: 'Add ingredient', href: '/ingredient/create' }}>Ingredients</Title>
        </div>
    )
}

export default Page
