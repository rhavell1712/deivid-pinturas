import { Brush, Clock, Star } from "lucide-react"

export default function About() {
    return (
        <section className="py-20 px-4 bg-[#f5f5f5]">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* IMAGEM */}
                <div className="relative">

                    <img
                        src="/fundo.jpg"
                        alt="Pintor profissional"
                        className="w-full h-100 object-cover rounded-2xl shadow-lg"
                    />

                    {/* Card flutuante (SEM NÚMERO FAKE) */}
                    <div className="absolute -bottom-6 left-6 bg-white p-5 rounded-xl shadow-xl w-[85%]">
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Atendimento direto, sem intermediários, com foco total
                            em qualidade e acabamento profissional.
                        </p>
                    </div>

                </div>

                {/* TEXTO */}
                <div>

                    <span className="text-sm text-[#d94e1f] font-semibold">
                        SOBRE
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2">
                        Mais que pintura, transformação de ambientes
                    </h2>

                    <p className="text-gray-600 mt-5 leading-relaxed">
                        Sou pintor profissional com <strong>mais de 10 anos de experiência</strong>,
                        entregando resultados com cuidado, técnica e atenção aos detalhes.
                        Cada projeto é tratado com responsabilidade e compromisso.
                    </p>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Trabalho com pintura interna, externa, texturas e acabamentos,
                        sempre utilizando materiais de qualidade e métodos adequados
                        para cada tipo de superfície.
                    </p>

                    {/* CARDS */}
                    <div className="mt-8 grid grid-cols-2 gap-4">

                        {/* Card 1 */}
                        <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col items-center text-center">
                            <Clock className="text-[#d94e1f] mb-2" size={22} />
                            <span className="text-sm text-gray-500 font-medium">
                                +10 anos de experiência
                            </span>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col items-center text-center">
                            <Brush className="text-[#d94e1f] mb-2" size={22} />
                            <span className="text-sm text-gray-500 font-medium">
                                Técnicas profissionais
                            </span>
                        </div>

                        {/* Card 3 (centralizado embaixo) */}
                        <div className="col-span-2 flex justify-center">
                            <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col items-center text-center w-full sm:w-1/2">
                                <Star className="text-[#d94e1f] mb-2" size={22} />
                                <span className="text-sm text-gray-500 font-medium">
                                    Foco total na satisfação
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}