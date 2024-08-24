import Image from 'next/image'
import HeroSlider from './_components/HeroSlider'
import AboutUs from './_components/AboutUs'
import Services from './_components/Services'
import Cta from './_components/Cta'
import FloatingButton from './_components/FloatingButton'
import Armada from './_components/Armada'
import Perjalanan from './_components/Perjalanan'
import Script from 'next/script'

export default function Home() {
    return (
        <div className=''>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-965062289"></Script>
            <Script id='gtm' src='/gtag.js' strategy='afterInteractive'>
            {`
                window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-965062289');
            `}
            </Script>
            <HeroSlider />
            <AboutUs />
            <Services />
            <Perjalanan />
            <Armada />
            <Cta />
            <FloatingButton />
        </div>
    )
}
