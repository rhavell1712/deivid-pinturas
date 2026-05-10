"use client"

import { useState } from "react"

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog"

type Project = {
    id: number
    title: string
    description: string
    images: string[]
}

export default function Portfolio() {

    const projects: Project[] = [
        {
            id: 1,
            title: "Revestimento em Pedra Natural",
            description:
                "Revestimento em pedra natural aplicado na parede, oferecendo alta durabilidade e um acabamento sofisticado.",

            images: [
                "/pedra.jpeg",
                "/pedra-1.jpeg",
                "/pedra-2.jpeg",
                "/pedra-3.jpeg",
                "/pedra-4.jpeg",
            ],
        },

        {
            id: 2,
            title: "Aplicação de Pintura com Efeito Texturizado",
            description:
                "Execução de pintura interna utilizando técnica de efeito texturizado.",

            images: [
                "/pintura-1.jpeg",
                "/pintura-2.jpeg",
                "/pintura-3.jpeg",
                "/pintura-4.jpeg",
            ],
        },
    ]

    const [currentImage, setCurrentImage] = useState(0)

    return (
        <section
            id="portfolio"
            className="bg-[#f5f5f5] py-20 px-4"
        >

            {/* TITULO */}
            <div className="text-center">

                <p className="text-orange-500 text-sm sm:text-base font-semibold">
                    Nosso Trabalho
                </p>

                <h1 className="text-black text-3xl sm:text-5xl font-bold mt-3">
                    Portfólio
                </h1>

                <p className="text-gray-500 text-sm sm:text-lg mt-5 max-w-2xl mx-auto">
                    Veja alguns dos nossos projetos recentes.
                </p>

            </div>

            {/* GRID */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">

                {projects.map((project) => (

                    <Dialog key={project.id}>

                        <DialogTrigger asChild>

                            <button
                                data-aos="zoom-in"
                                type="button"
                                onClick={() => setCurrentImage(0)}
                                className="
                                    group relative w-full text-left
                                    bg-white rounded-3xl overflow-hidden

                                    shadow-sm
                                    hover:shadow-xl

                                    transition-all duration-300

                                    active:scale-[0.98]
                                    touch-manipulation
                                "
                            >

                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="
                                        w-full h-72 object-cover
                                        pointer-events-none select-none
                                    "
                                />

                                <span className="
                                    absolute top-4 left-4
                                    bg-orange-500 text-white
                                    text-xs font-semibold
                                    px-4 py-2 rounded-full
                                ">
                                    Clique para ver mais
                                </span>

                                <div className="p-5">

                                    <h2 className="text-black text-xl font-bold">
                                        {project.title}
                                    </h2>

                                    <p className="text-gray-500 text-sm mt-2">
                                        {project.description}
                                    </p>

                                </div>

                            </button>

                        </DialogTrigger>

                        {/* MODAL LIMPO */}
                        <DialogContent
                            className="
                                p-0
                                overflow-hidden
                                border-0

                                w-[95vw]
                                sm:max-w-3xl

                                bg-black

                                rounded-2xl

                                shadow-2xl
                            "
                        >

                            <DialogTitle className="sr-only">
                                {project.title}
                            </DialogTitle>

                            <DialogDescription className="sr-only">
                                Galeria de imagens do projeto {project.title}
                            </DialogDescription>

                            {/* IMAGEM PRINCIPAL */}
                            <div className="relative">

                                <img
                                    src={project.images[currentImage]}
                                    alt={project.title}
                                    className="
                                        w-full
                                        h-70
                                        sm:h-150
                                        object-cover
                                        select-none
                                    "
                                />

                                {/* LEFT */}
                                <button
                                    onClick={() =>
                                        setCurrentImage((prev) =>
                                            prev === 0
                                                ? project.images.length - 1
                                                : prev - 1
                                        )
                                    }
                                    className="
                                        absolute left-3 top-1/2 -translate-y-1/2

                                        bg-black/50
                                        hover:bg-black/80

                                        text-white

                                        p-2 rounded-full
                                    "
                                >
                                    <ChevronLeft />
                                </button>

                                {/* RIGHT */}
                                <button
                                    onClick={() =>
                                        setCurrentImage((prev) =>
                                            prev === project.images.length - 1
                                                ? 0
                                                : prev + 1
                                        )
                                    }
                                    className="
                                        absolute right-3 top-1/2 -translate-y-1/2

                                        bg-black/50
                                        hover:bg-black/80

                                        text-white

                                        p-2 rounded-full
                                    "
                                >
                                    <ChevronRight />
                                </button>

                            </div>

                            {/* MINIATURAS */}
                            <div className="flex gap-3 p-4 bg-black overflow-x-auto">

                                {project.images.map((image, index) => (

                                    <button
                                        key={index}
                                        onClick={() => setCurrentImage(index)}
                                        className="shrink-0"
                                    >
                                        <img
                                            src={image}
                                            className={`
                                                w-16 h-16 sm:w-20 sm:h-20
                                                object-cover rounded-lg

                                                transition

                                                ${currentImage === index
                                                    ? "ring-2 ring-orange-500"
                                                    : "opacity-60"
                                                }
                                            `}
                                        />
                                    </button>

                                ))}

                            </div>

                        </DialogContent>

                    </Dialog>

                ))}

            </div>

        </section>
    )
}