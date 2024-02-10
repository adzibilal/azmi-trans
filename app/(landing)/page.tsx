import Image from 'next/image'
import HeroSlider from './_components/HeroSlider'
import AboutUs from './_components/AboutUs'
import Services from './_components/Services'
import Cta from './_components/Cta'
import FloatingButton from './_components/FloatingButton'
import Armada from './_components/Armada'
import Perjalanan from './_components/Perjalanan'

export default function Home() {
    return (
        <div className=''>
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
