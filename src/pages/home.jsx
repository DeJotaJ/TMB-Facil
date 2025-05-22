
export default function Home(){
    return(
        <>
            {/* BANNER */}
            <main className="relative w-full min-h-[50vh] md:min-h-[90vh] bg-[url(./prato01.jpg)]  md:bg-right bg-contain bg-top md:bg-contain  bg-no-repeat flex">
                <div className="
                        w-full min-h-full py-4 md:p-0 md:m-0 bg-linear-to-t from-[#D8D7BE] from-45% to-transparent to-75%
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
                        <span className="mx-8 px-4 py-2  border-transparent rounded-xl uppercase text-[#D8D7BE] font-semibold bg-[#222831]">
                            Calcule sua TMB e comece agora!
                        </span>
                    </a>
                </div>
            </main>
            <section className="relative w-full min-h-screen flex justify-center bg-[#283B48]">
                <article className="w-full md:w-2/3 text-sm md:text-base flex flex-col items-center gap-12 py-8 px-12 bg-[#D8D7BE]">
                    <span className="text-3xl font-bold font-sans"> O QUE É TMB?</span>
                    <p>
                        TMB é taxa metabólica basal, representa a quantidade de energia que o organismo consome para manter suas funções 
                        essenciais enquanto está em descanso, como a respiração, os batimentos cardíacos e a regulação da temperatura 
                        corporal.
                        <br/><br/>
                        O gasto energético corresponde à quantidade total de energia que uma pessoa utiliza ao longo do dia. Ele não se 
                        limita apenas às funções básicas do organismo, como a taxa metabolica basal, mas também inclui o consumo de 
                        energia durante atividades físicas. De maneira geral, adotou-se o valor aproximado de 2.000 kcal por dia como 
                        referência média para adultos. No entanto, esse número pode variar significativamente de acordo com o indivíduo.
                        <br/><br/>
                        Esse gasto varia conforme <b>idade, peso e sexo</b>, e é fundamental para estimar o total de calorias utilizadas 
                        diariamente. Por isso, é uma ferramenta importante no <b>planejamento nutricional</b> de quem busca <b>manter o peso, 
                        ganhar massa ou perder gordura</b>.
                        Usando <a href="/calculadora" className="font-semibold underline text-[#283B48]">nossa calculadora</a> você descobre sua TMB e seu gasto energético, assim podendo controlar melhor o que come.
                    </p>
                    <span className="w-full text-xl font-semibold font-sans"> Como faço para saber quanto estou comendo? </span>
                    <p>
                        Você pode usar o aplicativo MyFitnessPal para registrar seus alimentos e refeições, lá você pode buscar 
                        alimentos, criar receitas e até deixar suas refeições prontas.
                    </p>
                </article>
            </section>
        </>
    )
}