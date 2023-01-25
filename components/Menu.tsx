import Link from 'next/link'

export const Menu = () => {
    return (
        <>
            <div
                className={
                    'bg-white px-16 py-20 rounded-tr-[2.8rem] rounded-br-[2.8rem]'
                }
            >
                <Link className={'text-primary font-bold text-3xl'} href={'/'}>
                    Lama
                </Link>
                <ul>
                    <li>
                        <Link className={''} href={'/category'}>
                            Category
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
