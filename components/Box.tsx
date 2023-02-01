import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    className?: string
}

export const Box = ({ children, className = '' }: Props) => {
    return <div className={`bg-white p-16 rounded-md shadow-md ${className}`}>{children}</div>
}
