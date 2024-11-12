import { useState } from "react"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href)
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
        setIsMobileMenuOpen(false)
    }
  return (
    <div>
        <nav className="fixed left-0 right-0 z-50 lg:top-4">
            {/* Desktop Menu */}
            <div className="mx-auto hidden max-w-xl items-center justify-center rounded-full border border-white/30 py-2 backdrop-blur-lg lg:flex">
            <div className="flex items-center justify-between gap-6">
                <div>
                    <a href="/">
                        <span className="uppercase">Shubham Pancharas</span>
                    </a>
                </div>
                <div>
                    <ul className="flex items-center gap-4">
                        {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a className="text-sm hover:text-stone-300" href={item, href} 
                                onClick={(e) => handleLinkClick(e, item.href) }>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>

            {/* Mobile menu */}
        </nav>
    </div>
  )
}

export default Navbar