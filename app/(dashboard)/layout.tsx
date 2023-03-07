import React from 'react'
import '@assets/css/main.css'

import { Menu } from '@components/Menu'
import { QueryClient } from '@components/QueryClient'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Menu />
            <section className={'w-full p-20'}>
                <QueryClient>{children}</QueryClient>
            </section>
        </>
    )
}
