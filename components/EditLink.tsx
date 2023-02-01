import Link from 'next/link'

import EditIcon from '@svg/edit.svg'

type Props = {
    href: string
}
export const EditLink = ({ href }: Props) => {
    return (
        <Link href={href}>
            <EditIcon className={'w-7 fill-grey-600 transition-colors hover:fill-success'} />
        </Link>
    )
}
