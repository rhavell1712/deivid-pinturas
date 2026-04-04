import { Award, Shield, Zap } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
    return (
        <section className="relative h-svh flex items-center justify-center text-white overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src="/fundo.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">

                <span className="inline-block text-xs sm:text-sm bg-[#883e1c]/60 text-[#f4b400] border border-amber-600 rounded-full px-4 py-2 mb-6">
                    Orçamento 100% Gratuito e Sem Compromisso
                </span>

                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
                    Pintura profissional que{" "}
                    <span className="text-[#d94e1f]">
                        transforma seu ambiente
                    </span>
                </h1>

                <p className="text-gray-300 text-base sm:text-lg mt-6">
                    Qualidade, rapidez e acabamento impecável. Mais de 10 anos
                    entregando resultados de alto padrão.
                </p>

                {/* BOTÕES */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">

                    {/* Botão principal */}
                    <a
                        href="#"
                        className="bg-[#d94e1f] p-4 rounded-md font-semibold text-base shadow-lg w-full sm:w-auto text-center"
                    >
                        Solicitar orçamento agora
                    </a>

                    {/* Botão secundário */}
                    <a
                        href="#"
                        className="bg-gray-400/20 border border-gray-400 text-white font-medium p-4 rounded-md text-sm text-center"
                    >
                        Portfólio
                    </a>

                </div>

                {/* BENEFÍCIOS */}
                <div className="flex justify-center gap-6 mt-12 text-sm flex-wrap">

                    <div className="flex items-center gap-2">
                        <Award className="text-[#d94e1f]" size={18} />
                        <span>10+ Anos de Experiência</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Shield className="text-[#d94e1f]" size={18} />
                        <span>Serviço com Garantia</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Zap className="text-[#d94e1f]" size={18} />
                        <span>Atendimento Rápido</span>
                    </div>

                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-6 border-b-2 border-r-2 border-[#d94e1f] rotate-45"></div>
            </div>

        </section>
    )
}