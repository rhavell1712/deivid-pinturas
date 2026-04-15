import { Menu } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/40 border-b backdrop-blur-lg border-gray-200 shadow-sm">

            <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex flex-col leading-tight">
                    <span className="font-bold text-lg sm:text-xl text-black">
                        <span className="text-[#d94e1f]">David</span> Pinturas & Acabamentos
                    </span>
                </div>

                {/* NAV DESKTOP */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

                    <a href="#about" className="hover:text-[#d94e1f] transition">
                        Sobre
                    </a>

                    <a href="#services" className="hover:text-[#d94e1f] transition">
                        Serviços
                    </a>

                    <a href="#portfolio" className="hover:text-[#d94e1f] transition">
                        Portfólio
                    </a>

                    <a href="#contact" className="hover:text-[#d94e1f] transition">
                        Contato
                    </a>

                </nav>

                {/* BOTÃO + MENU MOBILE */}
                <div className="flex items-center gap-4">

                    {/* CTA Desktop */}
                    <a
                        href="#"
                        className="hidden md:inline-flex bg-[#d94e1f] text-white px-5 py-2.5 rounded-md text-sm font-semibold shadow-sm hover:bg-[#c63f15] transition"
                    >
                        Entrar em contato
                    </a>

                    {/* Menu Mobile */}
                    <button className="md:hidden text-black">
                        <Menu size={28} />
                    </button>

                </div>

            </div>

        </header>
    );
}