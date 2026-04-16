export default function FloatingWhatsAppButton() {
    return (
        <div className="fixed bottom-6 right-6 flex items-center">

            {/* Efeito de pulsação */}
            <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-400 opacity-75 animate-ping"></span>

            {/* Botão */}
            <a
                href="https://wa.me/5527997198676"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
            >
                <img
                    src="/icon-whatsapp.png"
                    alt="imagem do whatsapp"
                    className="h-10 w-10"
                />
            </a>

        </div>
    );
}