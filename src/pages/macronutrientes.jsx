export default function Macronutrientes(){
    return(
        <>
            <div className="relative w-full min-h-[80dvh] flex justify-center  bg-[#4a5d6a] text-white">
                    <main className="
                            w-full  text-sm  flex flex-col items-center gap-0 py-4 px-4  bg-[#283B48]
                            md:w-2/3 md:text-base md:px-12 md:py-8 md:justify-start
                    ">
                        <h1 className="text-2xl mt-2 md:text-4xl font-black">Macronutrientes</h1>
                        <h2 className="hidden md:block md:mb-2 md:text-lg font-light italic">Conheça os nutrientes que dão energia e sustentam o funcionamento do corpo.</h2>
                        <div class="my-8 text-justify leading-relaxed">
                            <img
                                class="w-32 h-auto md:w-48 md:h-auto md:mt-0 object-contain float-left mt-2 mr-4 rounded"
                                src="./macronutrientes.png" alt="macronutrientes"
                            />
                            <p className="md:text-base text-sm">
                                Os macronutrientes são os grandes aliados do seu corpo. Presentes na maioria dos alimentos, eles garantem 
                                energia, construção muscular, funcionamento do cérebro e até a absorção de vitaminas. Vamos entender 
                                melhor cada um?
                            </p>
                        </div>
                        {/* CARDS */}
                        <div className="w-full h-auto flex flex-col items-center gap-4 py-2 md:flex-row md:gap-8">
                            {/* CARD CARBOIDRATO */}
                            <div className="border-2 border-[#222831] w-12/12 h-auto rounded-lg">
                                <h3 className="w-full p-0.5 bg-[#222831] rounded-t-lg text-lg uppercase text-center"> 🍞 Carboidratos
                                <br/></h3>
                                <h4 className="h-14 px-1 py-1 bg-zinc-100 border-b-2 border-[#222831] text-[#222831] text-base "><b>Fontes:</b> arroz, massas, frutas, legumes</h4>
                                <p className="h-28 px-1 py-1 bg-zinc-100 text-[#222831] rounded-b-lg text-base text-start">
                                    A principal fonte de energia. Transformam-se em glicose para alimentar suas células. 
                                    Essenciais para o cérebro e músculos.
                                </p>
                            </div>
                            {/* CARD PROTEÍNA */}
                            <div className="border-2 border-[#222831] w-12/12 h-auto rounded-lg">
                                <h3 className="w-full p-0.5 bg-[#222831] rounded-t-lg text-lg uppercase text-center"> 🍗 Proteínas <br /> </h3>
                                <h4 className="h-14 px-1 py-1 bg-zinc-100 border-b-2 border-[#222831] text-[#222831] text-base "><b>Fontes:</b> carnes, ovos, feijão, grão-de-bico</h4>
                                <p className="h-28 px-1 py-1 bg-zinc-100 text-[#222831] rounded-b-lg text-base ">
                                    Estrutura e recuperação. Reparam tecidos, constroem músculos e produzem enzimas. Fundamentais para quem treina.
                                </p>
                            </div>
                            {/* CARD GORDURA */}
                            <div className="border-2 border-[#222831] w-12/12 h-auto rounded-lg">
                                <h3 className="w-full p-0.5 bg-[#222831] rounded-t-lg text-lg uppercase text-center"> 🥑 Gorduras
                                <br/></h3>
                                <h4 className="h-14 px-1 py-1 bg-zinc-100 border-b-2 border-[#222831] text-[#222831] text-base "><b>Fontes:</b> azeite, abacate, nozes, peixes</h4>
                                <p className="h-28 px-1 py-1 bg-zinc-100 text-[#222831] rounded-b-lg text-base ">
                                    Energia e proteção. Essenciais para absorver vitaminas, proteger órgãos e produzir hormônios.
                                </p>
                            </div>
                        </div>
                        <a href="/calculadora" title="Página em construção" className="my-4 text-base font-normal hover:font-bold hover:underline hover:cursor-pointer text-[#aef4ff]">Veja como calcular sua TMB (Taxa Metabólica Basal) </a>
                        <p className="md:w-3/5 bg-[#aef4ff] text-[#222831] rounded-lg p-2 text-base font-normal">
                            <b className="font-black">💡 Dica do site:</b> Não existe dieta ideal sem equilíbrio! Cada pessoa tem uma necessidade diferente. 
                            Consulte um nutricionista para ajustar sua alimentação.
                        </p>
                        
                    </main>
            </div>
        </>
    )
}