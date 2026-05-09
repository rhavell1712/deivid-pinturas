"use client"

import { useState } from "react"
import { Menu, X, Home, User, Wrench, Image } from "lucide-react"

export function Header() {

    const [open, setOpen] = useState(false)

    function closeMenu() {
        setOpen(false)
    }

    return (
        <>
            {/* HEADER */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-lg border-b-2 border-white shadow-sm">

                <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

                    {/* LOGO */}
                    <div className="font-bold text-lg text-black">
                        <span className="text-[#d94e1f]">David</span> Pinturas
                    </div>

                    {/* NAV DESKTOP */}
                    <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
                        <a href="#home" className="hover:text-[#d94e1f]">Inicio</a>
                        <a href="#about" className="hover:text-[#d94e1f]">Sobre</a>
                        <a href="#services" className="hover:text-[#d94e1f]">Serviços</a>
                        <a href="#portfolio" className="hover:text-[#d94e1f]">Portfólio</a>
                    </nav>

                    {/* CTA + MENU */}
                    <div className="flex items-center gap-4">

                        {/* WHATSAPP */}
                        <a
                            href="https://wa.me/5527997198676"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex items-center gap-2 text-sm font-medium bg-[#d94e1f] text-white px-4 py-2 rounded-md shadow-lg transform transition active:scale-95 hover:scale-105"
                        >
                            <img src="/icon-whatsapp.png" className="h-5 w-5" />
                            Entrar em Contato
                        </a>

                        {/* BOTÃO MOBILE */}
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="md:hidden text-black"
                        >
                            {open ? <X size={28} /> : <Menu size={28} />}
                        </button>

                    </div>

                </div>

            </header>

            {/* OVERLAY */}
            <div
                onClick={closeMenu}
                className={`
                    fixed inset-0 z-40 bg-black/40
                    transition-opacity duration-300
                    ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
            />

            {/* MENU MOBILE */}
            <div
                className={`
                    fixed top-16 right-4 z-50

                    w-[85%] max-w-xs

                    bg-white rounded-2xl shadow-2xl border border-gray-100

                    transition-all duration-300 origin-top-right

                    ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                `}
            >

                <nav className="flex flex-col p-4 gap-3 text-sm text-gray-700">

                    <a onClick={closeMenu} href="#home" className="flex items-center gap-2 hover:text-[#d94e1f]">
                        <Home size={16} /> Inicio
                    </a>

                    <a onClick={closeMenu} href="#about" className="flex items-center gap-2 hover:text-[#d94e1f]">
                        <User size={16} /> Sobre
                    </a>

                    <a onClick={closeMenu} href="#services" className="flex items-center gap-2 hover:text-[#d94e1f]">
                        <Wrench size={16} /> Serviços
                    </a>

                    <a onClick={closeMenu} href="#portfolio" className="flex items-center gap-2 hover:text-[#d94e1f]">
                        <Image size={16} /> Portfólio
                    </a>

                    <a
                        onClick={closeMenu}
                        href="https://wa.me/5527997198676"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 bg-[#d94e1f] text-white text-center py-2 rounded-md"
                    >
                        Entrar em Contato
                    </a>

                </nav>

            </div>
        </>
    )
}