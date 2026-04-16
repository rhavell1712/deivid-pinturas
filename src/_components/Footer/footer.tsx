

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-300 py-12 px-6">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* SOBRE */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-4">
                        Pinturas Pro
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
                        <li><a href="#home" className="hover:text-white transition">Início</a></li>
                        <li><a href="#sobre" className="hover:text-white transition">Sobre</a></li>
                        <li><a href="#portfolio" className="hover:text-white transition">Portfólio</a></li>
                        <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
                    </ul>
                </div>

                {/* CONTATO */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">
                        Contato
                    </h2>
                    <ul className="space-y-2 text-sm">
                        <li>📞 (27) 99999-9999</li>
                        <li>📧 contato@pinturaspro.com</li>
                        <li>📍 Espírito Santo - Brasil</li>
                    </ul>

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
                © {new Date().getFullYear()} Pinturas Pro. Todos os direitos reservados.
            </div>

        </footer>
    );
}