import Link from 'next/link'

type Props = {
    children: any
    className?: string
    type?: 'submit' | 'button'
    href?: string
    prefetch?: boolean
}
export const Button = ({ children, className, type = 'submit', href = '', prefetch = true }: Props) => {
    return (
        <>
            {href ? (
                <Link prefetch={prefetch} className={`${className} button`} href={href}>
                    {children}
                </Link>
            ) : (
                <button type={type} className={`${className} button`}>
                    {children}
                </button>
            )}
        </>
    )
}
