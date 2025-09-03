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
            <section className="relative w-full min-h-screen flex justify-center  bg-[#E7E7E7] text-[#121224]">
                {/* ANUNCIOS*/}
                    <div className="w-1/6 max-h-full border-2 border-blue-600/0 py-4 px-2 flex flex-wrap items-start justify-center rounded-lg"> 
                        <AdComponentMobile/>
                    </div>
                {/* ANUNCIOS*/}
                <article className="
                        w-full  text-sm  flex flex-col items-center gap-2 py-1 px-1 bg-[#D0D0D0] md:bg-[#D0D0D0]
                        md:w-3/4 md:text-base md:px-2 md:py-2
                        lg:w-4/6 lg:text-base lg:px-3 lg:py-3
                ">
                    
                    <div className="px-2 pt-4 pb-2 rounded-lg flex flex-col gap-3 md:px-4 md:pt-2 md:pb-4 md:flex md:flex-col md:gap-5 md:rounded-xl bg-[#E0E0E0]">
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
                            <div className="flex flex-col mt-2 md:m-0 gap-3 lg:gap-2">
                                <span className="text-base font-medium md:font-semibold">Quer entender de forma simples e prática como aplicar tudo isso no seu dia a dia?</span>
                                <span className="w-fit rounded-lg bg-[#121224] px-2 py-1 text-base text-[#e7e7e7]">
                                    Descubra os Fundamentos da Nutrição →
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* EXPLICAÇÃO TMB */}
                    <div className="px-2 pt-1 pb-2 rounded-lg  md:px-4 md:py-2 md:flex md:flex-col md:gap-5 md:rounded-xl bg-[#E0E0E0]">
                        <h2 className="text-2xl md:text-3xl text-center font-bold font-sans mb-4 md:mb-8"> O QUE É TMB?</h2>
                        <p className="w-full h-auto flex flex-col gap-4 mb-8 md:mb-4">
                            <span>
                                TMB é a Taxa Metabólica Basal. Ela representa a quantidade de energia que o corpo consome para manter suas 
                                funções vitais em repouso — como respirar, bombear o sangue e regular a temperatura corporal.
                            </span>
                            <span>
                                Já o gasto energético corresponde ao total de calorias que seu corpo usa ao longo do dia, incluindo atividades 
                                físicas, digestão, movimentos e até o raciocínio. Estimar esse gasto é essencial para quem deseja manter o peso, 
                                emagrecer ou ganhar massa muscular, e ele varia conforme idade, peso, sexo e rotina.
                            </span>
                            <span>
                                A nossa calculadora pode te ajudar a descobrir sua TMB e o seu gasto energético. Com esse número em mãos, você 
                                pode ajustar sua alimentação de forma mais estratégica.
                            </span>
                            
                            <a href="/calculadora" className="w-fit px-2 py-0.5 text-base font-semibold rounded-lg bg-[#00A6C0] text-[#00111A] hover:underline hover:text-[#000108]">Clique aqui para calcular sua TMB</a>
                        </p>
                        {/* PORQUE CALCULAR SUA TMB? */}
                        <h2 className="w-full text-xl md:text-2xl font-semibold"> Por que calcular sua TMB? </h2>
                            <ul className="mb-4 md:mb-0 list-disc list-inside pl-2 flex flex-col gap-1 md:gap-1">
                                <li> Evita dietas aleatórias</li>
                                <li> Ajuda a planejar sua alimentação</li>
                                <li> Reduz erros comuns ao tentar emagrecer ou ganhar massa</li>
                                <li> Promove saúde com responsabilidade</li>
                            </ul>
                        <span className="w-full text-xl md:text-2xl font-semibold font-sans mb:2 md:mb-1"> Como saber quanto estou comendo? </span>
                        <p className="w-full h-auto mb-4">
                            Existem aplicativos que facilitam o controle da alimentação diária. Com eles, você pode buscar alimentos, 
                            escanear rótulos, salvar receitas e registrar tudo o que come ao longo do dia.
                            <br/><br/>
                            Entre os mais usados estão:
                            <br/>
                            <ul className="list-disc list-inside pl-2 flex flex-col gap-0.5 md:gap-1">
                                <li>MyFitnessPal</li>
                                <li>Yazio</li>
                                <li>FatSecret</li>
                                <li>HealthifyMe</li>
                            </ul>
                            <br/>
                            Com eles, é possível escanear alimentos, salvar receitas e montar seu próprio diário alimentar.
                        </p>
                    </div>

                    {/* 3 PILARES DA ALIMENTAÇÃO */}
                    <div className="px-2 pt-1 pb-2 flex flex-col gap-3 rounded-lg  md:px-4 md:py-2 md:flex md:flex-col md:gap-5 md:rounded-xl bg-[#E0E0E0]">
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
                            <span className="w-fit rounded-lg text-base font-semibold bg-[#121224] px-2 py-1 md:py-0.5 text-[#e7e7e7] hover:underline hover:text-[#FFFFFF] hover:font-bold">
                                <a href="/macronutrientes" title="Página em construção">Descubra mais aqui</a>
                            </span>
                        </div>
                    </div>

                    {/* MICRONUTRIENTES */}
                    <div className="px-2 py-1 rounded-lg md:flex md:flex-col md:px-2 md:py-2 md:rounded-xl bg-[#E0E0E0]">
                        <span className="w-full text-xl md:text-2xl font-semibold font-sans mb-0.5 md:mb-2"> O que são micronutrientes? </span>
                        <p className="w-full h-auto mb-4 flex flex-col gap-4">
                            <span>
                                Micronutrientes são nutrientes essenciais, como vitaminas e minerais, que o corpo necessita em quantidades muito pequenas
                            </span>
                            
                            <ul className="pl-2 list-inside flex flex-col gap-1 md:gap-2">
                                <li>
                                    <b>Vitaminas:</b>A, C, D, E, K e as vitaminas do complexo B (B1, B2, B6, B12, etc.).
                                </li>
                                <li>
                                    <b>Minerais</b>Ferro, cálcio, zinco, potássio, sódio, iodo, entre outros.
                                </li>
                            </ul>
                            <span>
                                É importante manter um equilíbrio na ingestão de micronutrientes, pois o consumo excessivo de alguns deles também pode ser 
                                prejudicial à saúde.
                            </span>
                            <a 
                                href="/micronutrientes" 
                                title="Micronutrientes" 
                                className="w-fit px-2 py-0.5 rounded-lg font-medium bg-[#121224] text-[#E0E0E0] hover:underline hover:text-[#FFFFFF] hover:font-bold
                                            max-[420px]:text-base
                            ">
                                Entenda mais os micronutrientes
                            </a>
                        </p>
                    </div>

                    {/* EMAGRECIMENTO */}
                    <div className="px-2 py-1 rounded-lg flex flex-col gap-2 md:px-2 md:py-2 md:rounded-xl bg-[#E0E0E0]">
                        <span className="w-full text-xl md:text-2xl font-semibold font-sans mb:0.5 md:mb-1"> 
                            <span>Como funciona o emagrecimento?</span><br/>
                            <i className="w-full text-sm md:text-sm md:font-normal mb:0.5 md:mb-2"> Emagrecer é o processo de usar mais energia do que se consome. </i>
                        </span>
                        <p className="w-full h-auto mb-4">
                            <p>
                                Nosso corpo gasta energia o tempo todo: para respirar, pensar, andar, digerir alimentos, se movimentar e até dormir. Essa energia vem da comida que comemos — principalmente dos carboidratos, gorduras e proteínas.
                            </p>
                            <br/>
                            <p>
                                Quando comemos menos calorias do que gastamos, o corpo busca essa energia faltante nas reservas de gordura. Com o tempo, isso leva à perda de peso — especialmente de gordura corporal.
                            </p>
                            <br/>
                            ✅&nbsp; Em resumo:
                            <ol className="pl-2 list-inside list-decimal flex flex-col gap-1 md:gap-2">
                                <li>
                                    Se você gasta mais calorias do que consome → emagrece.
                                </li>
                                <li>
                                    Se você come mais calorias do que gasta → engorda.
                                </li>
                            </ol>
                            <br/>
                            Isso é chamado de <b>balanço calórico.</b>
                            <br/><br/>
                            <span 
                                href="/#" 
                                title="Página em construção" 
                                className="w-fit px-2 py-1 md:py-0.5 rounded-lg font-medium bg-[#323248] text-[#C0C0C0]
                                            max-[420px]:text-base
                            ">
                                Saiba sobre emagrecimento e ganho de massa
                            </span>
                        </p>
                    </div>
                </article>
                {/* ANUNCIOS*/}
                    <div className="w-1/6 max-h-full border-2 border-blue-600/0 py-4 px-2 flex flex-wrap items-start justify-center rounded-lg"> 
                        <AdComponentMobile/>
                    </div>
                {/* ANUNCIOS*/}
            </section>
        </>
    )
}
