/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Script from 'next/script'
import GoogleTagManager from './(landing)/_components/analytics/googleTagManager'
import { GoogleAnalytics } from '@next/third-parties/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'AZMI TRANS',
    description: 'Jasa Travel transportasi dan charter drop bandara murah nyaman aman ekonomis antar Kota Bandung Jakarta Bali Majalengka Pangandaran Tasik Ciamis Banjar Cirebon Tegal Semarang Surabaya Probolinggo Banyuwangi Denpasar'
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
                <meta name='description' content='Jasa Travel transportasi dan charter drop bandara murah nyaman aman ekonomis antar Kota Bandung Jakarta Bali Majalengka Pangandaran Tasik Ciamis Banjar Cirebon Tegal Semarang Surabaya Probolinggo Banyuwangi Denpasar' />
                <link rel='icon' href='/favicon.ico' />

            </Head>
            <body className={montserrat.className}>
                <GoogleTagManager />
                {children}
            </body>
            <GoogleAnalytics gaId='AW-965062289' />
        </html>
    )
}
