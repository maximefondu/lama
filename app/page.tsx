import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/category">Category</Link>
                </li>
            </ul>
        </div>
    )
}
