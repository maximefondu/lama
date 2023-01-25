import Link from 'next/link'

type Props = {
    children: any
    className?: string
    type?: 'submit' | 'button'
    href?: string
}
export const Button = ({children, className, type = 'submit', href = ''}: Props) => {
    return (
        <>
            {href ? (
                <Link className={`${className} button`} href={href}>
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
