import { House, Building2, Paintbrush, PaintRoller, Droplet, Hammer } from 'lucide-react';

export default function Services() {

    const services = [
        {
            icon: House,
            title: "Pintura Residencial",
            description: "Transformamos casas e apartamentos com acabamento impecável. Paredes, tetos, portas e janelas com qualidade garantida."
        },
        {
            icon: Building2,
            title: "Pintura Comercial",
            description: "Lojas, escritórios, galpões e estabelecimentos comerciais. Trabalhamos com agilidade para minimizar interrupções no seu negócio."
        },
        {
            icon: Paintbrush,
            title: "Pintura Interna e Externa",
            description: "Expertise em ambientes internos e fachadas externas. Utilizamos tintas de alta durabilidade resistentes às intempéries."
        },
        {
            icon: PaintRoller,
            title: "Texturas e Acabamentos",
            description: "Texturas grafiato, marmorizado, efeitos especiais e acabamentos decorativos que valorizam e personalizam seus ambientes."
        },
        {
            icon: Droplet,
            title: "Impermeabilização",
            description: "Proteção de lajes, terraços, banheiros e áreas úmidas contra infiltrações e umidade com produtos de alta performance."
        },
        {
            icon: Hammer,
            title: "Reforma e Preparação",
            description: "Preparação de superfícies, correção de trincas, massa corrida e todo o tratamento necessário antes da pintura."
        }
    ];

    return (
        <section id='services' className="bg-[#f5f5f5] py-16 px-4 ">

            {/* Título */}
            <div className="text-center mb-12">
                <p className="text-orange-500 text-sm sm:text-base font-medium">
                    O Que Fazemos
                </p>

                <h1 className="text-black text-3xl sm:text-4xl font-bold mt-2">
                    Nossos Serviços
                </h1>

                <p className='text-gray-500 text-sm sm:text-xl text-center mt-4'>Soluções completas em pintura e acabamento para deixar seu <br /> espaço do jeito que você sempre sonhou.</p>

            </div>

            {/* GRID RESPONSIVO */}
            <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                        <article
                            key={index}
                            className="text-black p-6 flex flex-col gap-4 rounded-xl shadow-md bg-white hover:shadow-lg hover:shadow-orange-500/50 transition transform hover:scale-105 duretion-400"
                        >

                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100">
                                <Icon size={24} className="text-orange-500" />
                            </div>

                            <h2 className="text-lg sm:text-xl font-bold">
                                {service.title}
                            </h2>

                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                {service.description}
                            </p>

                        </article>
                    );
                })}

            </div>

            {/* CTA */}
            <div className="mt-16 text-center">

                <p className="text-gray-500 mb-4">
                    Precisa de um serviço específico?
                </p>

                <a
                    href="https://wa.me/5527997198676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-orange-500 text-white font-semibold px-6 py-3 rounded-md gap-3 transform transition active:scale-95 hover:scale-105"
                >
                    <img src="/icon-whatsapp.png" alt="icone do whatsapp" className="w-6 h-6" />
                    Fale Conosco no Whatsapp
                </a>

            </div>

        </section>
    );
}