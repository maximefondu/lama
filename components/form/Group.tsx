import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const Group = ({ children }: Props) => {
    return <div className={'flex gap-12 [&>*]:flex-1'}>{children}</div>
}
