export function handleWa() {
    const text = `Halo Azmi Trans saya ingin booking kendaraan 👋`
    const waURL = `https://api.whatsapp.com/send?phone=6283878875304&text=${encodeURIComponent(
        text
    )}`
    window.open(waURL, '_blank')
}