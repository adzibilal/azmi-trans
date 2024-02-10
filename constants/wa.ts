export function handleWa() {
    const text = `Halo Azmi Trans saya ingin booking kendaraan 👋`
    const waURL = `https://api.whatsapp.com/send?phone=6282218299990&text=${encodeURIComponent(
        text
    )}`
    window.open(waURL, '_blank')
}