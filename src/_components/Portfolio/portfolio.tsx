export default function Portfolio() {
    return (
        <section id="portfolio" className="bg-[#f5f5f5] py-16 px-4">

            <p className="text-orange-500 text-center text-sm sm:text-base font-medium">
                Nosso Trabalho
            </p>

            <h1 className="text-black text-center text-3xl sm:text-4xl font-bold mt-2">
                Portfólio
            </h1>

            <p className='text-gray-500 text-sm sm:text-xl text-center mt-4'>
                Veja alguns dos nossos projetos recentes <br /> e inspire-se para transformar seu espaço com a gente.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <article className="bg-white rounded-lg shadow-md p-2 hover:scale-105 transition-transform duration-300">
                    <img src="/fundo.jpg" alt="Projeto 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
                    <h2 className="text-black text-xl font-semibold mt-4">Projeto Residencial</h2>
                    <p className="text-gray-500 mt-2">Transformamos uma casa antiga em um lar moderno e aconchegante.</p>
                </article>
                <article className="bg-white rounded-lg shadow-md p-2 hover:scale-105 transition-transform duration-300">
                    <img src="/fundo.jpg" alt="Projeto 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
                    <h2 className="text-black text-xl font-semibold mt-4">Projeto Residencial</h2>
                    <p className="text-gray-500 mt-2">Transformamos uma casa antiga em um lar moderno e aconchegante.</p>
                </article>
                <article className="bg-white rounded-lg shadow-md p-2 hover:scale-105 transition-transform duration-300 ">
                    <img src="/fundo.jpg" alt="Projeto 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
                    <h2 className="text-black text-xl font-semibold mt-4">Projeto Residencial</h2>
                    <p className="text-gray-500 mt-2">Transformamos uma casa antiga em um lar moderno e aconchegante.</p>
                </article>


            </div>

        </section>
    );
}