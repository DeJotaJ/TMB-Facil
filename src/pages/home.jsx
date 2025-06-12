
export default function Home(){
    return(
        <>
            {/* BANNER */}
            <main className="relative w-full min-h-[50vh] md:min-h-[90vh] bg-[url('/prato01.jpg')]  md:bg-right bg-contain bg-top md:bg-contain  bg-no-repeat flex">
                <div className="
                        w-full min-h-full py-4 md:p-0 md:m-0 bg-linear-to-t from-[#E5E5E5] from-45% to-transparent to-75%
                        flex flex-col justify-end items-center gap-4
                        md:relative md:justify-center md:items-start md:gap-8 md:bg-linear-to-r md:from-45%
                ">
                    <span className=" 
                        w-full px-4 text-2xl text-[#222831] font-semibold flex justify-center text-center
                        md:w-1/2 md:pl-8 md:pr-24 md:text-5xl md:font-bold md:flex md:justify-start md:text-left
                    
                    ">
                        Alimentação inteligente e acessível.
                    </span>
                    <a 
                        href="/calculadora" 
                        className="md:w-1/2 h-fit py-4"
                    > 
                        <span className="mx-4 px-2 py-1 border-transparent rounded-xl uppercase text-[#E5E5E5] font-semibold bg-[#222831]
                                         md:mx-8 md:px-4 md:py-2
                        ">
                            Calcule sua TMB e comece agora!
                        </span>
                    </a>
                </div>
            </main>
            <section className="relative w-full min-h-screen flex justify-center  bg-[#4a5d6a] text-white">
                <article className="
                        w-full  text-sm  flex flex-col items-center gap-0 py-4 px-8  bg-[#283B48]
                        md:w-2/3 md:text-base md:px-12 md:py-8
                ">
                    {/* EXPLICAÇÃO TMB */}
                    <h2 className="text-2xl md:text-3xl font-bold font-sans mb-4 md:mb-8"> O QUE É TMB?</h2>
                    <p className="w-full h-auto mb-12">
                        TMB é a Taxa Metabólica Basal. Ela representa a quantidade de energia que o corpo consome para manter suas 
                        funções vitais em repouso — como respirar, bombear o sangue e regular a temperatura corporal.
                        <br/><br/>
                        Já o gasto energético corresponde ao total de calorias que seu corpo usa ao longo do dia, incluindo atividades 
                        físicas, digestão, movimentos e até o raciocínio. Estimar esse gasto é essencial para quem deseja manter o peso, 
                        emagrecer ou ganhar massa muscular, e ele varia conforme idade, peso, sexo e rotina.
                        <br/><br/>
                        A nossa calculadora pode te ajudar a descobrir sua TMB e o seu gasto energético. Com esse número em mãos, você 
                        pode ajustar sua alimentação de forma mais estratégica.
                        <br/><br/>
                        <a href="/calculadora" className="font-semibold underline text-[#00A6C0]">Clique aqui para calcular sua TMB</a>
                    </p>
                    {/* PORQUE CALCULAR SUA TMB? */}
                    <h2 className="w-full text-xl md:text-2xl font-semibold font-sans mb:0.5 md:mb-1"> Por que calcular sua TMB? </h2>
                    <p className="w-full h-auto mb-12">
                        <ul className="list-disc pl-6">
                            <li> Evita dietas aleatórias</li>
                            <li> Ajuda a planejar sua alimentação</li>
                            <li> Reduz erros comuns ao tentar emagrecer ou ganhar massa</li>
                            <li> Promove saúde com responsabilidade</li>
                        </ul>
                    </p>


                    {/* COMO CALCULAR COMIDA */}
                    <span className="w-full text-xl md:text-2xl font-semibold font-sans mb:0.5 md:mb-1"> Como saber quanto estou comendo? </span>
                    <p className="w-full h-auto mb-12">
                        Existem aplicativos que facilitam o controle da alimentação diária. Com eles, você pode buscar alimentos, 
                        escanear rótulos, salvar receitas e registrar tudo o que come ao longo do dia.
                        <br/><br/>
                        Entre os mais usados estão:
                        <br/>
                        <ul className="list-disc pl-6">
                            <li>MyFitnessPal</li>
                            <li>Yazio</li>
                            <li>FatSecret</li>
                            <li>HealthifyMe</li>
                        </ul>
                        <br/>
                        Com eles, é possível escanear alimentos, salvar receitas e montar seu próprio diário alimentar.
                    </p>

                    {/* MACRONUTRIENTES */}
                    <span className="w-full text-xl md:text-2xl font-semibold font-sans mb:0.5 md:mb-1"> O que são macronutrientes? </span>
                    <p className="w-full h-auto mb-12">
                        Existem aplicativos que facilitam o controle da alimentação diária. Com eles, você pode buscar alimentos, 
                        escanear rótulos, salvar receitas e registrar tudo o que come ao longo do dia.
                        <br/><br/>
                        Nosso corpo precisa de três grupos principais de nutrientes para funcionar bem:
                        <br/><br/>
                        <ul className="list-none pl-0">
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
                        <br/>
                        Conhecer e equilibrar esses nutrientes na alimentação é o que torna sua dieta mais eficaz.Com eles, é possível escanear alimentos, salvar receitas e montar seu próprio diário alimentar.
                        <br/><br/>
                        <a href="/macronutrientes" title="Página em construção" className="font-semibold underline hover:cursor-pointer text-[#63b5c2]">Entenda os macronutrientes em detalhes</a>
                    </p>

                    <span className="w-full text-xl md:text-2xl font-semibold font-sans mb:0.5 md:mb-1"> Como funciona o emagrecimento? </span>
                    <i className="w-full text-sm md:text-sm mb:0.5 md:mb-2"> Emagrecer é um processo de usar mais energia do que se consome. </i>
                    <p className="w-full h-auto mb-12">
                       <p>
                        Nosso corpo gasta energia o tempo todo: para respirar, pensar, andar, digerir alimentos, se movimentar e até dormir. Essa energia vem da comida que comemos — principalmente dos carboidratos, gorduras e proteínas.
                       </p>
                        <br/>
                        <p>
                            Quando comemos menos calorias do que gastamos, o corpo busca essa energia faltante nas reservas de gordura. Com o tempo, isso leva à perda de peso — especialmente de gordura corporal.
                        </p>
                        <br/>
                        ✅&nbsp; Em resumo:
                        <br/><br/>
                        <ul className="list-disc pl-6">
                            <li>
                                Se você gasta mais calorias do que consome → emagrece.
                            </li>
                            <li>
                                Se você come mais calorias do que gasta → engorda.
                            </li>
                        </ul>
                        <br/>
                        Isso é chamado de <b>balanço calórico.</b>
                        <br/><br/>
                        <span href="/#" title="Página em construção" className="font-semibold underline hover:cursor-pointer text-[#63b5c2]">Entenda mais sobre emagrecimento e ganho de massa</span>
                    </p>

                </article>
            </section>
        </>
    )
}
