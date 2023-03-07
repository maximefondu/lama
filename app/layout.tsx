import React from 'react'
import '@assets/css/main.css'

import { Notification } from '@components/Notification'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <head>
                <title>Lama</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </head>
            <body>
                <main className={'min-h-screen bg-grey-200 font-main text-sm flex'}>
                    {children}
                    <Notification />
                </main>
            </body>
        </html>
    )
}
