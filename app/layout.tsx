import React from 'react'
import './../assets/css/main.css'

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
            <body>{children}</body>
        </html>
    )
}
