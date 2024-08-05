/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Script from 'next/script'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'AZMI TRANS',
    description: 'AMAN NYAMAN EKONOMIS'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <Head>
                <title>AZMI TRANS</title>
                <meta name='description' content='AMAN NYAMAN EKONOMIS' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Script
                async
                src='https://www.googletagmanager.com/gtag/js?id=AW-965062289'></Script>
            <Script src='/gtag.js' strategy='afterInteractive'></Script>
            <body className={montserrat.className}>{children}</body>
        </html>
    )
}
