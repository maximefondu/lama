import React from 'react'
import './../assets/css/main.css'
import { QueryClient } from '../components/QueryClient'
import { Menu } from '@components/Menu'

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
            <title>Lama</title>
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <body className={'min-h-screen bg-grey-200 font-main text-sm flex'}>
                <Menu />
                <section className={'w-full p-20'}>
                    <QueryClient>{children}</QueryClient>
                </section>
            </body>
        </html>
    )
}
