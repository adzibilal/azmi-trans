import Footer from './_components/Footer'
import Navbar from './_components/Navbar'

export default function LandingPageLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className=''>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
