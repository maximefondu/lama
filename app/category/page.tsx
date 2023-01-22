import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <Link href={'/category/create'}>Add category</Link>
            <ul>list</ul>
        </div>
    )
}
