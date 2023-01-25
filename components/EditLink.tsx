import Link from 'next/link'

type Props = {
    href: string
}
export const EditLink = ({ href }: Props) => {
    return <Link href={href}>Edit</Link>
}
