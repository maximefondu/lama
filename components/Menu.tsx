'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Menu = () => {
    const pathname = usePathname()

    return (
        <>
            <div className={'bg-white px-16 py-20 rounded-tr-[2.8rem] rounded-br-[2.8rem]'}>
                <Link className={'text-primary font-bold text-3xl'} href={'/'}>
                    Lama
                </Link>
                <ul className={'flex flex-col gap-6 mt-12'}>
                    <li>
                        <Link
                            className={`transition-all hover:text-primary font-medium ${pathname === '/customer' ? 'text-primary' : 'text-grey-600'}`}
                            href={'/customer'}>
                            Customers
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`transition-all hover:text-primary font-medium ${pathname === '/ingredient' ? 'text-primary' : 'text-grey-600'}`}
                            href={'/ingredient'}>
                            Ingredients
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`transition-all hover:text-primary font-medium ${pathname === '/category' ? 'text-primary' : 'text-grey-600'}`}
                            href={'/category'}>
                            Categories
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
