import { Button } from '@components/Button'

type Props = {
    children: string
    link?: {
        title: string
        href: string
    }
    button?: {
        title: string
        href: string
    }
}

export const Title = ({ children, link, button }: Props) => {
    return (
        <div className={'flex justify-between items-end mb-20'}>
            <div>
                {link && (
                    <Button prefetch={false} className={'_link'} href={link.href}>
                        {link.title}
                    </Button>
                )}
                <h1 className={'text-2xl font-bold'}>{children}</h1>
            </div>
            {button && (
                <Button prefetch={false} href={button.href}>
                    {button.title}
                </Button>
            )}
        </div>
    )
}
