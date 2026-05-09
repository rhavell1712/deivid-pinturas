'use client'

import { Phone, MapPin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-300 py-12 px-6">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* SOBRE */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-4">
                        <span className="text-amber-700">Deivid</span>Pinturas
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Transformamos ambientes com pintura profissional, acabamento de qualidade e atenção aos detalhes. Seu espaço renovado com excelência.
                    </p>
                </div>

                {/* LINKS */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        Navegação
                    </h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-amber-700 transition">Início</a></li>
                        <li><a href="#about" className="hover:text-amber-700 transition">Sobre</a></li>
                        <li><a href="#services" className="hover:text-amber-700 transition">Serviços</a></li>
                        <li><a href="#portfolio" className="hover:text-amber-700 transition">Portfólio</a></li>

                    </ul>
                </div>

                {/* CONTATO */}
                <div>
                    <div className="flex flex-col gap-3 text-sm font-heading text-white">

                        {/* TELEFONE */}
                        <div className="flex items-center gap-2">
                            <Phone size={18} className="text-[#d94e1f]" />
                            <span>(27) 99719-8676</span>
                        </div>

                        {/* LOCALIZAÇÃO */}
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-[#d94e1f]" />
                            <span>Domingos Martins - ES</span>
                        </div>

                    </div>
                    {/* BOTÃO */}
                    <a
                        href="https://wa.me/5527997198676"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center gap-3 mt-4 bg-orange-500 text-white px-4 py-2 rounded-md transform transition active:scale-95 hover:scale-105"
                    >
                        <img src="/icon-whatsapp.png" alt="icone do whatsapp" className="h-6 w-6 gap-3" />
                        Solicitar Orçamento
                    </a>
                </div>

            </div>

            {/* LINHA FINAL */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} DeividPinturas. Todos os direitos reservados.
            </div>

        </footer>
    );
}