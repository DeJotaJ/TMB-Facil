
export default function Home(){
    return(
        <>
            {/* BANNER */}
            <main className="relative w-full min-h-[50vh] md:min-h-[80vh] lg:min-h-[90vh] bg-[url('/prato01.jpg')]  lg:bg-right bg-contain bg-top lg:bg-contain bg-no-repeat flex">
                <div className="
                        w-full min-h-full py-8 bg-linear-to-t from-[#E5E5E5] from-45% to-transparent to-75%
                        flex flex-col justify-end items-center gap-2
                        md:py-16 md:gap-8 
                        lg:p-0 lg:m-0 lg:justify-center lg:items-start lg:gap-12 lg:bg-linear-to-r lg:from-[#EEE] lg:from-45% lg:to-transparent lg:to-75%
                        
                ">
                    <span className=" 
                        w-full px-4 text-2xl text-[#00111A] font-semibold flex justify-center text-center
                        lg:w-1/2 lg:pl-8 lg:pr-24 lg:text-5xl lg:font-bold lg:flex lg:justify-start lg:text-left
                    
                    ">
                        Alimentação inteligente e acessível.
                    </span>
                    <a 
                        href="/calculadora" 
                        className="lg:w-fit h-fit py-1 px-4 md:px-4 lg:px-8"
                    > 
                        <span className="mx-4 px-2 py-1 border-transparent rounded-xl uppercase text-[#E5E5E5] font-semibold bg-[#00111A]
                                         md:px-4 md:py-2
                                         lg:mx-0 lg:px-4 lg:py-2
                        ">
                            Calcule sua TMB e comece agora!
                        </span>
                    </a>
                </div>
            </main>
            {/* BANNER */}
            <section className="relative w-full min-h-screen flex justify-center  bg-[#1B2C35] text-white">
                <article className="
                        w-full  text-sm  flex flex-col items-center gap-2 py-1 px-1  bg-[#183A4B]
                        md:w-3/4 md:text-base md:px-2 md:py-2
                        lg:w-2/3 lg:text-base lg:px-3 lg:py-3
                ">
                    {/* EXPLICAÇÃO TMB */}
                    <div className="px-2 py-1 rounded-lg md:px-2 md:py-2 md:rounded-xl bg-[#002233]">
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
                            
                            <a href="/calculadora" className="font-semibold underline text-[#B2E6FF] hover:text-[#00AAFF]">Clique aqui para calcular sua TMB</a>
                        </p>
                        {/* PORQUE CALCULAR SUA TMB? */}
                        <h2 className="w-full text-xl md:text-2xl font-semibold font-sans mb:0.5 md:mb-2"> Por que calcular sua TMB? </h2>
                        <p className="w-full h-auto mb-4">
                            <ul className="list-disc list-inside pl-2 flex flex-col gap-2 md:gap-1">
                                <li> Evita dietas aleatórias</li>
                                <li> Ajuda a planejar sua alimentação</li>
                                <li> Reduz erros comuns ao tentar emagrecer ou ganhar massa</li>
                                <li> Promove saúde com responsabilidade</li>
                            </ul>
                        </p>
                    </div>
                    
                    {/* COMO CALCULAR COMIDA */}
                    <div className="px-2 py-1 rounded-lg md:px-2 md:py-2 md:rounded-xl bg-[#002233]">
                        <span className="w-full text-xl md:text-2xl font-semibold font-sans mb:0.5 md:mb-1"> Como saber quanto estou comendo? </span>
                        <p className="w-full h-auto mb-4">
                            Existem aplicativos que facilitam o controle da alimentação diária. Com eles, você pode buscar alimentos, 
                            escanear rótulos, salvar receitas e registrar tudo o que come ao longo do dia.
                            <br/><br/>
                            Entre os mais usados estão:
                            <br/>
                            <ul className="list-disc list-inside pl-2 flex flex-col gap-2 md:gap-1">
                                <li>MyFitnessPal</li>
                                <li>Yazio</li>
                                <li>FatSecret</li>
                                <li>HealthifyMe</li>
                            </ul>
                            <br/>
                            Com eles, é possível escanear alimentos, salvar receitas e montar seu próprio diário alimentar.
                        </p>
                    </div>


                    {/* MACRONUTRIENTES */}

                    <div className="px-2 py-1 rounded-lg md:flex md:flex-col md:px-2 md:py-2 md:rounded-xl bg-[#002233]">
                        <span className="w-full text-xl md:text-2xl font-semibold font-sans mb-0.5 md:mb-2"> O que são macronutrientes? </span>
                        <p className="w-full h-auto mb-4 flex flex-col gap-4">
                            <span>
                                Existem aplicativos que facilitam o controle da alimentação diária. Com eles, você pode buscar alimentos, 
                                escanear rótulos, salvar receitas e registrar tudo o que come ao longo do dia.
                            </span>
                            <span>
                                Nosso corpo precisa de três grupos principais de nutrientes para funcionar bem:
                            </span>
                            
                            <ul className="pl-2 list-inside flex flex-col gap-2 md:gap-1">
                                <li>
                                    🍞 &nbsp;
                                    <b>Carboidratos:</b> Fonte principal de energia
                                </li>
                                <li>
                                    🍖 &nbsp;
                                    <b>Proteínas:</b> Constróem e reparam músculos e tecidos
                                </li>
                                <li>
                                    🥑 &nbsp;
                                    <b>Gorduras boas:</b> Essenciais para hormônios e absorção de vitaminas
                                </li>
                            </ul>
                            Conhecer e equilibrar esses nutrientes na alimentação é o que torna sua dieta mais eficaz.Com eles, é possível escanear alimentos, salvar receitas e montar seu próprio diário alimentar.
                            <a href="/macronutrientes" title="Página em construção" className="font-semibold underline hover:cursor-pointer text-[#85D7E4] hover:text-[#00AAFF]">Entenda os macronutrientes em detalhes</a>
                        </p>
                    </div>
                    <div className="px-2 py-1 rounded-lg md:flex md:flex-col md:px-2 md:py-2 md:rounded-xl bg-[#002233]">
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
                            <a href="/micronutrientes" title="Micronutrientes" className="font-semibold underline hover:cursor-pointer text-[#B2E6FF] hover:text-[#00AAFF]">Entenda mais os micronutrientes</a>
                        </p>
                    </div>

                    <div className="px-2 py-1 rounded-lg flex flex-col gap-2 md:px-2 md:py-2 md:rounded-xl bg-[#002233]">
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
                            <span href="/#" title="Página em construção" className="font-semibold underline hover:cursor-pointer text-[#B2E6FF] hover:text-[#00AAFF]">Entenda mais sobre emagrecimento e ganho de massa</span>
                        </p>
                    </div>
                </article>
            </section>
        </>
    )
}
