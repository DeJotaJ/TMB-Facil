
export default function Home(){
    return(
        <>
            {/* BANNER */}
            <main className="relative w-full min-h-[50vh] md:min-h-[90vh] bg-[url('/prato01.jpg')]  md:bg-right bg-contain bg-top md:bg-contain  bg-no-repeat flex">
                <div className="
                        w-full min-h-full py-4 md:p-0 md:m-0 bg-linear-to-t from-[#E5E5E5] from-45% to-transparent to-75%
                        flex flex-col justify-end gap-4
                        md:relative md:justify-center md:gap-8 md:bg-linear-to-r md:from-45%
                ">
                    <span className=" 
                        w-full px-4 text-3xl text-[#222831] font-bold
                        md:w-1/2 md:pl-8 md:pr-24 md:text-5xl
                    
                    ">
                        Alimentação inteligente e acessível.
                    </span>
                    <a 
                        href="/calculadora" 
                        className="md:w-1/2 h-fit py-4"
                    > 
                        <span className="mx-8 px-4 py-2  border-transparent rounded-xl uppercase text-[#E5E5E5] font-semibold bg-[#222831]">
                            Calcule sua TMB e comece agora!
                        </span>
                    </a>
                </div>
            </main>
            <section className="relative w-full min-h-screen flex justify-center  bg-[#283B48]">
                <article className="
                        w-full  text-sm  flex flex-col items-center gap-0 py-4 px-8  bg-[#E5E5E5]
                        md:w-2/3 md:text-base md:px-12 md:py-8
                ">
                    {/* EXPLICAÇÃO TMB */}
                    <span className="text-2xl md:text-3xl font-bold font-sans mb-4 md:mb-8"> O QUE É TMB?</span>
                    <p className="w-full h-auto mb-12">
                        TMB é a Taxa Metabólica Basal. Ela representa a quantidade de energia que o corpo consome para manter suas 
                        funções vitais em repouso — como respiração, circulação sanguínea e regulação da temperatura corporal.
                        <br/><br/>
                        Já o gasto energético total corresponde ao número de calorias que seu corpo usa ao longo do dia, incluindo 
                        atividades físicas, digestão e movimentações básicas.
                        <br/><br/>
                        Saber esses valores é essencial para quem deseja:
                        <ul className="list-disc pl-6">
                            <li>
                                Manter o peso atual
                            </li>
                            <li>
                                Emagrecer de forma segura
                            </li>
                            <li>
                                Ganhar massa muscular sem exageros
                            </li>
                        </ul>
                        <br/>
                        Esses dados variam de acordo com sua idade, peso, sexo e rotina. Nossa calculadora te ajuda a descobrir esses números com precisão.
                        <br/><br/>
                        <a href="/calculadora" className="font-semibold underline text-[#283B48]">Clique aqui para calculalar sua TMB</a>
                    </p>
                    {/* PORQUE CALCULAR SUA TMB? */}
                    <span className="w-full text-xl md:text-2xl font-semibold font-sans mb:0.5 md:mb-1"> Por que calcular sua TMB? </span>
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
                        Eles ajudam a montar um diário alimentar e a entender se você está comendo demais ou de menos para seu objetivo.
                    </p>
                </article>
            </section>
        </>
    )
}
