import AdComponentMobile from "../components/adComponentMobile";

export default function Home(){
    return(
        <>
            {/* BANNER */}
            <main
                className="relative w-full min-h-[40vh] sm:min-h-[50vh] bg-[url('/prato01.webp')] sm:bg-[url('/prato02.webp')] bg-contain bg-top bg-no-repeat
                            flex
                            md:min-h-[80vh] 
                            lg:min-h-[90vh] lg:bg-right  lg:bg-contain">
                <div className="
                        w-full min-h-full py-8 bg-linear-to-t from-[#E0E0E0] from-35% to-transparent to-75%
                        flex flex-col justify-end items-center gap-2
                        max-[420px]:py-8 
                        md:py-16 md:gap-8 
                        lg:p-0 lg:m-0 lg:justify-center lg:items-start lg:gap-12 lg:bg-linear-to-r lg:from-[#E7E7E7] lg:from-45% lg:to-transparent lg:to-50%
                        
                ">
                    <span className=" 
                        w-full px-4 text-2xl text-[#121224] font-semibold flex justify-center text-center
                        max-[420px]:text-lg
                        lg:w-1/2 lg:pl-8 lg:pr-24 lg:text-5xl lg:font-bold lg:flex lg:justify-start lg:text-left
                    
                    ">
                        Alimentação inteligente e acessível.
                    </span>
                    <a 
                        href="/calculadora" 
                        className="lg:w-fit h-fit py-1 px-4 md:px-4 lg:px-8"
                    > 
                        <span className="mx-4 px-3 py-1 border-transparent rounded-xl uppercase text-[#E7E7E7] font-semibold bg-[#121224]
                                         lg:hover:px-5 lg:hover:py-2.5 lg:hover:text-[17px]
                                         md:shadow-[0_2px_8px] md:shadow-[#060612]
                                         max-[420px]:text-sm
                                         md:px-4 md:py-2
                                         lg:mx-0 lg:px-4 lg:py-2
                        ">
                            Calcule sua TMB e comece agora!
                        </span>
                    </a>
                </div>
            </main>
            {/* BANNER */}
            <div className="relative w-full min-h-screen flex justify-center  bg-[#E7E7E7] text-[#121224]">
                {/* ANUNCIOS*/}
                    <div className="hidden lg:w-1/6 max-h-full border-2 border-blue-600/0 py-4 px-2 md:flex flex-wrap items-start justify-center rounded-lg"> 
                        <AdComponentMobile/>
                    </div>
                {/* ANUNCIOS*/}
                <article className="
                        w-full  text-sm  flex flex-col items-center gap-2 py-1 px-1 bg-[#D0D0D0] md:bg-[#D0D0D0]
                        md:w-3/4 md:text-base md:px-2 md:py-2 md:gap-4
                        lg:w-4/6 lg:text-base lg:px-3 lg:py-3
                ">
                    
                    <section className="w-full px-2 pt-4 pb-2 rounded-lg flex flex-col gap-3 md:px-4 md:pt-2 md:pb-4 md:flex md:flex-col md:gap-5 md:rounded-xl bg-[#E0E0E0]">
                        {/* NUTRIÇÃO */}
                        <div className="flex flex-col">
                            <h2 className="text-2xl md:text-3xl font-bold">NUTRIÇÃO</h2>
                            <span className="text-base">
                                Nutrição é o processo de fornecer ao corpo os nutrientes de que ele precisa para funcionar corretamente. Ela 
                                envolve o que comemos, como nosso corpo digere e como usa esses nutrientes.
                            </span>
                        </div>
                        {/* FUNDAMENTOS DA NUTRIÇÃO */}
                        <div className="flex flex-col">
                            <h2 className="hidden md:block text-lg md:text-xl font-semibold">Fundamentos da Nutrição: o que você realmente precisa saber para se alimentar melhor</h2>
                            <h2 className="md:hidden text-lg md:text-2xl font-semibold">Fundamentos da Nutrição<span className="hidden md:block">: o que você realmente precisa saber para se alimentar melhor</span></h2>
                            <span className="text-base">
                                A base de uma vida saudável começa com entender como os alimentos funcionam no seu corpo.
                            </span>
                        </div>
                        <div className="flex flex-col md:flex-row md:flex-wrap md:gap-y-6 md:gap-x-3">
                            <div className="flex flex-col items-start md:flex-row md:justify-center md:gap-3 md:flex-wrap">
                                <span className="w-full lg:w-[22.5%] mt-3 font-semibold order-0 lg:order-0">🌱 Macronutrientes</span>
                                <span className="w-full lg:w-[22.5%] mt-3 font-semibold order-2 lg:order-0">🍊 Micronutrientes</span>
                                <span className="w-full lg:w-[22.5%] mt-3 font-semibold order-4 lg:order-0">💧 Água</span>
                                <span className="w-full lg:w-[22.5%] mt-3 font-semibold order-6 lg:order-0">🌾 Fibras</span>
                                <ul className="lg:w-[22.5%] px-1 order-1 lg:order-0">
                                    <li className="list-disc ml-4">O combustível do corpo: carboidratos, proteínas e gorduras.</li>
                                    <li className="list-disc ml-4">Cada um tem um papel único no seu dia a dia.</li>

                                </ul>
                                <ul className="lg:w-[22.5%] px-1 order-3 lg:order-0">
                                    <li className="list-disc ml-4">As “vitaminas e minerais” que regulam tudo dentro de você.</li>
                                    <li className="list-disc ml-4">Pequenos em quantidade, enormes em importância.</li>

                                </ul>
                                <ul className="lg:w-[22.5%] px-1 order-5 lg:order-0">
                                    <li className="list-disc ml-4">Mais do que matar a sede: essencial para energia, foco e saúde.</li>

                                </ul>
                                <ul className="lg:w-[22.5%] px-1 order-7 lg:order-0">
                                    <li className="list-disc ml-4">Seu intestino agradece.</li>
                                    <li className="list-disc ml-4">Controlam a digestão e ajudam até no controle de peso.</li>

                                </ul>
                            </div>
                            <div className="flex flex-col items-start md:flex-row md:justify-center md:gap-3 md:flex-wrap">
                                <span className="lg:w-[45%] mt-3 font-semibold order-0 md:order-0">🔥 Energia e Calorias</span>
                                <span className="lg:w-[45%] mt-3 font-semibold order-2 md:order-0">🥗 Alimentação Equilibrada</span>
                                <ul className="lg:w-[45%] px-1 order-1 md:order-0">
                                    <li className="list-disc ml-4">Entenda como funciona o “saldo calórico”.</li>
                                    <li className="list-disc ml-4">O segredo por trás de perder, manter ou ganhar peso.</li>

                                </ul>
                                <ul className="lg:w-[45%] px-1 order-3 md:order-0">
                                    <li className="list-disc ml-4">Não é dieta restrita.</li>
                                    <li className="list-disc ml-4">É aprender a montar pratos inteligentes que sustentam o corpo e a mente.</li>

                                </ul>
                            </div>
                            <div className="flex flex-col mt-2 md:m-0 gap-4 lg:gap-2">
                                <span className="text-base font-medium md:font-semibold">Quer entender de forma simples e prática como aplicar tudo isso no seu dia a dia?</span>
                                <span className="w-fit rounded-lg max-[420px]:text-sm text-base font-semibold bg-[#121224] px-2 py-1 md:py-0.5 text-[#e7e7e7] hover:underline hover:text-[#FFFFFF] hover:font-bold">
                                    <a href="/nutricao" title="Página sobre nutricao">Descubra os Fundamentos da Nutrição </a>
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 3 PILARES DA ALIMENTAÇÃO */}
                    <section className="w-full px-2 pt-2 pb-2 flex flex-col gap-3 rounded-lg  md:px-4 md:py-4 md:flex md:flex-col md:gap-5 md:rounded-xl bg-[#E0E0E0]">
                        <div className="flex flex-col">
                            <h2 className="hidden md:block text-lg md:text-2xl font-semibold">Os 3 pilares da sua alimentação: Proteínas, Carboidratos e Gorduras</h2>
                            <h2 className="md:hidden text-lg md:text-2xl font-semibold">Os 3 pilares da sua alimentação<span className="hidden md:block">: Proteínas, Carboidratos e Gorduras</span></h2>
                            <span className="text-base hidden md:block">
                                Eles não são vilões — são o combustível que mantém seu corpo funcionando todos os dias. Descubra como 
                                cada um impacta sua energia, saúde e resultados.
                            </span>
                        </div>
                        <div className="">
                            <span className="text-base font-medium md:font-semibold">
                                ⚡ Carboidratos:A fonte de energia preferida do organismo.
                            </span>
                            <ul className="ml-4">
                                <li className="list-disc ml-4">Garantem disposição no dia a dia</li>
                                <li className="list-disc ml-4">Melhoram desempenho físico e mental</li>
                                <li className="list-disc ml-4">São o “combustível rápido” do corpo</li>
                            </ul>
                        </div>
                        <div className="">
                            <span className="text-base font-medium md:font-semibold">
                                💪 Proteínas:O tijolo da construção do corpo.
                            </span>
                            <ul className="ml-4">
                                <li className="list-disc ml-4">Constroem músculos e tecidos</li>
                                <li className="list-disc ml-4">Auxiliam na recuperação e saciedade</li>
                                <li className="list-disc ml-4">São essenciais para hormônios e imunidade</li>
                            </ul>
                        </div>
                        <div className="">
                            <span className="text-base font-medium md:font-semibold">
                                🥑 Gorduras boas:Muito mais do que calorias extras.
                            </span>
                            <ul className="ml-4">
                                <li className="list-disc ml-4">Regulam hormônios e cérebro</li>
                                <li className="list-disc ml-4">Protegem órgãos e células</li>
                                <li className="list-disc ml-4">Fornecem energia de longa duração</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-2 md:m-0 gap-3 lg:gap-2">
                            <span className="text-base font-normal md:font-semibold">Quer entender como equilibrar cada macronutriente na sua dieta e usá-los a seu favor?</span>
                            <span className="w-fit rounded-lg max-[420px]:text-sm text-base font-semibold bg-[#121224] px-2 py-1 md:py-0.5 text-[#e7e7e7] hover:underline hover:text-[#FFFFFF] hover:font-bold">
                                <a href="/macronutrientes" title="Página em construção">Descubra mais aqui</a>
                            </span>
                        </div>
                    </section>

                    {/* MICRONUTRIENTES */}
                    <section className="w-full px-2 pt-2 pb-2 flex flex-col gap-3 rounded-lg  md:px-4 md:py-4 md:flex md:flex-col md:gap-5 md:rounded-xl bg-[#E0E0E0]">
                        <div className="flex flex-col">
                            <h2 className="hidden md:block text-lg md:text-2xl font-semibold">Micronutrientes: os pequenos heróis da sua saúde</h2>
                            <h2 className="md:hidden text-lg md:text-2xl font-semibold">Micronutrientes: os pequenos heróis da sua saúde<span className="hidden md:block">Vitaminas e minerais que fazem toda a diferença no seu corpo — mesmo em quantidades minúsculas.</span></h2>
                            <span className="text-base hidden md:block">
                                Apesar de precisarmos deles em pequenas quantidades, os micronutrientes são fundamentais para manter energia, 
                                imunidade, foco e até o bom funcionamento do coração. Eles participam de centenas de reações no corpo, regulam 
                                hormônios, fortalecem ossos e garantem que tudo esteja em equilíbrio.
                                <br/>
                                Sem eles? Seu corpo pode sentir fadiga, queda de imunidade, falta de concentração e até desenvolver doenças.
                            </span>
                        </div>
                        <div className="">
                            <ul className="">
                                <li className="">🥕 <b>Vitaminas</b> – ajudam na imunidade, energia e proteção celular</li>
                                <li className="">🥦 <b>Minerais</b> – fortalecem ossos, músculos e o equilíbrio do organismo</li>
                                <li className="">🌱 <b>Oligoelementos</b> – mesmo em quantidades mínimas, são cruciais para o metabolismo</li>
                                <li className="">🍇 <b>Antioxidantes</b> – combatem radicais livres e o envelhecimento precoce</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-2 md:m-0 gap-3 lg:gap-2">
                            <span className="text-base font-normal md:font-semibold">Quer entender como cada micronutriente age no seu corpo e onde encontrá-los na alimentação? Descubra no guia completo.</span>
                            <span className="w-fit rounded-lg max-[420px]:text-sm text-base font-semibold bg-[#121224] px-2 py-1 md:py-0.5 text-[#e7e7e7] hover:underline hover:text-[#FFFFFF] hover:font-bold">
                                <a href="/micronutrientes" title="Página em construção">Ver Guia de Micronutrientes</a>
                            </span>
                        </div>
                    </section>

                    {/* HIDRATAÇÃO */}
                    <section className="w-full px-2 pt-2 pb-2 flex flex-col gap-3 rounded-lg  md:px-4 md:py-4 md:flex md:flex-col md:gap-5 md:rounded-xl bg-[#E0E0E0]">
                        <div className="flex flex-col">
                            <h2 className="hidden md:block text-lg md:text-2xl font-semibold">Hidratação: o combustível invisível do seu corpo</h2>
                            <h2 className="md:hidden text-lg md:text-2xl font-semibold">Hidratação: o combustível invisível do seu corpo<span className="hidden md:block">Mais do que matar a sede: descubra como a água regula seu metabolismo, melhora seu desempenho e até influencia no emagrecimento.</span></h2>
                            
                        </div>
                        <div className="">
                            <ul className="">
                                <li className="">💧 Mantém a temperatura do corpo equilibrada</li>
                                <li className="">⚡ Dá energia e melhora a disposição</li>
                                <li className="">🧠 Favorece concentração e clareza mental</li>
                                <li className="">🍽️ Ajuda na digestão e no controle do apetite</li>
                                <li className="">🏋️ Essencial para músculos e desempenho físico</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-2 md:m-0 gap-3 lg:gap-2">
                            <span className="text-base font-normal md:font-semibold">Quer entender como a hidratação pode transformar sua saúde e sua rotina? Clique abaixo e descubra os fundamentos completos.</span>
                            <span className="w-fit rounded-lg max-[420px]:text-sm text-base font-semibold bg-[#121224] px-2 py-1 md:py-0.5 text-[#e7e7e7] hover:underline hover:text-[#FFFFFF] hover:font-bold">
                                <a href="/hidratacao" title="Página em construção">Saber mais sobre Hidratação</a>
                            </span>
                        </div>
                    </section>

                    {/* DIGESTÃO E METABOLISMO */}
                    <section className="w-full px-2 pt-2 pb-2 flex flex-col gap-3 rounded-lg  md:px-4 md:py-4 md:flex md:flex-col md:gap-5 md:rounded-xl bg-[#E0E0E0]">
                        <div className="flex flex-col">
                            <h2 className="hidden md:block text-lg md:text-2xl font-semibold">Digestão e Metabolismo: como seu corpo transforma comida em energia.</h2>
                            <h2 className="md:hidden text-lg md:text-2xl font-semibold">Digestão e Metabolismo: como seu corpo transforma comida em energia.</h2>
                            <span className="text-base hidden md:block">
                                Entenda de forma simples como os alimentos que você come são processados e usados pelo corpo — e descubra por que 
                                isso é essencial para quem quer emagrecer, manter ou ganhar massa.
                            </span>
                        </div>
                        <div className="">
                            <ul className="">
                                <li className="">🥦 Digestão</li>
                                <li className="">🧪 Absorção</li>
                                <li className="">🔥 Metabolismo</li>
                                <li className="">🏃 Catabolismo</li>
                                <li className="">🛠️Anabolismo e Catabolismo</li>
                                <li className="">⚖️Energia diária</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-2 md:m-0 gap-3 lg:gap-2">
                            <span className="text-base font-normal md:font-semibold">Quer entender de forma clara como tudo isso acontece no seu corpo?</span>
                            <span className="w-fit rounded-lg max-[420px]:text-sm text-base font-semibold bg-[#121224] px-2 py-1 md:py-0.5 text-[#f7f7f7] hover:underline hover:text-[#FFFFFF] hover:font-bold">
                                <a href="/digestao-e-metabolismo" title="Página em construção">Ver explicação completa</a>
                            </span>
                        </div>
                    </section>
                </article>
                {/* ANUNCIOS*/}
                    <div className="hidden lg:w-1/6 max-h-full border-2 border-blue-600/0 py-4 px-2 md:flex flex-wrap items-start justify-center rounded-lg"> 
                        <AdComponentMobile/>
                    </div>
                {/* ANUNCIOS*/}
            </div>
        </>
    )
}
