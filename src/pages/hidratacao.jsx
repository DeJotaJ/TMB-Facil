import AdComponentMobile from "../components/adComponentMobile";

export default function Hidratacao(){
    return(
        <>
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
                    
                    <section className="
                            px-2 py-2 rounded-lg flex flex-col gap-3 
                            md:px-4 md:py-4 md:flex md:flex-col md:gap-5 md:rounded-xl bg-[#E0E0E0]
                    ">
                        {/* HIDRATAÇÃO */}
                        <div className="flex flex-col items-center gap-4">
                            <h2 className="w-full mb-0 text-2xl md:text-3xl md:hidden font-bold">Hidratação</h2>
                            <h2 className="w-full mb-0 hidden md:block md:text-2xl font-bold">Hidratação: O Segredo para um Corpo Saudável e Cheio de Energia</h2>
                            <span className="w-full text-base italic">
                                Você sabia que mais da metade do seu corpo é feito de água? Ainda assim, 
                                muitas pessoas não bebem a quantidade suficiente e sofrem com cansaço, 
                                dores de cabeça e até queda de imunidade sem perceber. Nesta página, 
                                você vai entender por que a hidratação é tão essencial e aprender como 
                                beber água da forma certa pode transformar sua saúde e disposição.
                            </span>
                            <img 
                                className="w-80 h-48  md:w-[25rem] md:h-60 rounded-xl drop-shadow-sm drop-shadow-zinc-700 " 
                                src="./Hidratacao/bebendoAgua.webp" 
                                alt="Balança do alimentos e"
                                fetchpriority="high"
                                width={"25rem"}
                                height={"20rem"}
                            />
                        </div>

                        {/* O que é Hidratação */}
                        <div className="flex flex-col items-center gap-4 my-8">
                            <h3 className="w-full text-xl md:text-2xl font-bold">
                                O que é Hidratação?
                            </h3>
                            <span className="w-full text-base">
                                Hidratação é o equilíbrio de água no corpo. A água não apenas mata 
                                a sede, ela é responsável por manter todas as funções vitais ativas, 
                                do cérebro ao coração, dos músculos às células da pele.
                            </span>
                            <img 
                                className="w-64 h-72 rounded-xl drop-shadow-sm drop-shadow-zinc-500" 
                                src="./Hidratacao/aguaCorpo.webp" 
                                alt="Porcentagem de agua no corpo" 
                                width={"16rem"}
                                height={"18rem"}
                            />
                        </div>
                        
                        {/* Funções da Água no Corpo */}
                        <div className="flex flex-col items-center gap-4 my-8">
                            <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
                                Funções da Água no Corpo
                            </h3>
                            <span className="w-full text-lg md:text-xl">
                                A água está presente em todos os processos do organismo. Veja as principais funções:
                            </span>
                            <ul className="w-full text-base">
                                <li className="list-disc ml-4">
                                    💧 Regulação da temperatura corporal.
                                </li>
                                <li className="list-disc ml-4">
                                    💧 Eliminação de toxinas pela urina, fezes e suor.
                                </li>
                                <li className="list-disc ml-4">
                                    💧 Lubrificação de articulações, olhos e mucosas.
                                </li>
                                <li className="list-disc ml-4">
                                    💧 Equilíbrio de sais minerais (sódio, potássio, magnésio).
                                </li>
                                <li className="list-disc ml-4">
                                    💧 Participação em reações químicas, como a digestão.
                                </li>
                            </ul>
                        </div>

                        {/* Quanto de Água Beber por Dia? */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
                                Quanto de Água Beber por Dia?
                            </h3>
                            <span className="w-full text-base md:text-lg">
                                A quantidade ideal varia de pessoa para pessoa, mas existe uma fórmula simples para calcular:
                            </span>
                            <span className="w-full h-auto pl-2 py-2 border-l-3 border-[#121234] bg-[#B2F5FF] text-base md:text-base font-medium">
                                🔎 Exemplo: Se sua TMB é 1.600 kcal e você gasta mais 600 kcal em atividades, seu GET 
                                será 2.200 kcal/dia.
                            </span>
                            <ul className="w-full text-base md:text-lg">
                                <li className="list-disc ml-8">
                                    Exemplo: uma pessoa de 70 kg precisa de 2,1 a 2,4 L por dia.
                                </li>
                            </ul>
                            <span className="w-full h-auto pl-2 py-2 border-l-3 border-[#121234] bg-zinc-400">
                                <ul className="w-full text-base">
                                    <li className="">
                                        💡 Dica prática: Observe a cor da sua urina.
                                    </li>
                                    <li className="list-disc ml-10">
                                        Urina clara → boa hidratação.
                                    </li>
                                    <li className="list-disc ml-10">
                                       Urina escura → precisa beber mais líquidos.
                                    </li>
                                </ul>
                            </span>
                            <div className="w-full flex flex-col lg:flex-row justify-center lg:gap-64 items-center">
                                <img 
                                    className="w-40 h-40 drop-shadow-md drop-shadow-zinc-500 rounded-xl" 
                                    src="./Hidratacao/copoMedida.webp" 
                                    alt="Copo de medida"
                                />
                                <img 
                                    className="w-64 h-40 drop-shadow-md drop-shadow-zinc-500 rounded-xl" 
                                    src="./Hidratacao/urina.webp" 
                                    alt="Cor da urina"
                                />
                            </div>
                        </div>
                        
                        {/* Fontes de Hidratação */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
                                Fontes de Hidratação                  
                            </h3>
                            <span className="w-full text-lg">
                               A água pura é insubstituível, mas você também pode se hidratar com outros alimentos e bebidas.
                            </span>
                            <ul className="w-full text-base">
                                <li className="list-disc ml-4">
                                    <b>🍉 Frutas:</b> melancia, melão, laranja.
                                </li>
                                <li className="list-disc ml-4">
                                    <b>🥗 Verduras:</b> pepino, alface, tomate.
                                </li>
                                <li className="list-disc ml-4">
                                    <b>🥛 Leite e sopas.</b> 
                                </li>
                                <li className="list-disc ml-4">
                                    <b>🍵 Chás naturais</b> (sem excesso de cafeína).
                                </li>
                            </ul>
                            <span className="w-full h-auto pl-2 py-2 border-l-3 border-[#121234] bg-[#B2F5FF] text-base md:text-lg font-medium">
                                ⚠️ Evite exagerar em refrigerantes, café e álcool → eles aumentam a perda de líquidos.
                            </span>
                            <img 
                                className="w-52 h-32 max-[390px]:w-48 max-[390px]:h-28 md:w-80 md:h-60 drop-shadow-lg drop-shadow-zinc-600 rounded-xl" 
                                src="./Hidratacao/frutasVerduras.webp" 
                                alt="Prato com frutas"
                                width={"13rem"}
                                height={"8rem"}
                            />
                            
                        </div>

                        {/* Desidratação: Sinais e Consequências */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
                                Desidratação: Sinais e Consequências                           
                            </h3>
                            <span className="w-full text-lg">
                                A desidratação acontece quando o corpo perde mais água do que recebe. Veja os sinais:
                            </span>
                            <ul className="w-full text-base">
                                <li className="list-disc ml-4">
                                    <b>Leves a moderados:</b> boca seca, dor de cabeça, tontura, urina escura.
                                </li>
                                <li className="list-disc ml-4">
                                    <b>Graves:</b> queda de pressão, batimentos acelerados, confusão mental, risco de morte.
                                </li>
                            </ul>
                            <img 
                                className="w-80 h-48 md:w-[25rem] md:h-60 drop-shadow-lg drop-shadow-zinc-600 rounded-xl" 
                                src="./Hidratacao/pessoaSoando.webp" 
                                alt="Pessoa Soando"
                                width={"20rem"}
                                height={"12rem"}
                            />
                            
                        </div>

                        {/* Hidratação e Exercício Físico */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
                                Hidratação e Exercício Físico          
                            </h3>
                            <span className="w-full text-lg">
                                Durante o exercício, perdemos muita água pelo suor. Até 2% de perda já afeta o desempenho.
                            </span>
                            <ul className="w-full text-base">
                                <li className="list-disc ml-4">
                                   Em treinos longos, considere bebidas esportivas com eletrólitos.
                                </li>
                                <li className="list-disc ml-4">
                                   Pese-se antes e depois do treino: cada 1 kg perdido = 1 L de água a ser reposta.
                                </li>
                            </ul>
                            <div className="w-full flex justify-center items-center md:gap-2">
                                <img 
                                    className="w-80 h-48 md:w-[25rem] md:h-60 drop-shadow-lg drop-shadow-zinc-600 rounded-xl" 
                                    src="./Hidratacao/aguaExercicio.webp" 
                                    alt=""
                                    width={"20rem"}
                                    height={"12rem"}
                                />
                            </div>
                            
                        </div>

                        {/* Hidratação em Situações Especiais */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
                               Hidratação em Situações Especiais        
                            </h3>
                            <span className="w-full text-lg">
                                Alguns grupos precisam ter atenção redobrada à hidratação:
                            </span>
                            <ul className="w-full text-base">
                                <li className="list-disc ml-4">
                                   👵 Idosos → sentem menos sede.
                                </li>
                                <li className="list-disc ml-4">
                                    👶 Crianças → desidratam mais rápido.
                                </li>
                                <li className="list-disc ml-4">
                                    🤰 Gestantes → precisam de mais líquidos.
                                </li>
                                <li className="list-disc ml-4">
                                   ☀️ Clima quente ou febre → aumenta a necessidade de líquidos.
                                </li>
                            </ul>
                            
                        </div>

                        {/* Estratégias Práticas para se Hidratar Melhor */}
                        <div className="flex flex-col md:flex-row justify-start items-center gap-16 my-8">
                            <div className="flex flex-col items-center gap-4">
                                <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
                                Estratégias Práticas para se Hidratar Melhor                    
                                </h3>
                                <span className="w-full text-lg">
                                    Se você esquece de beber água, use essas estratégias simples no seu dia a dia:
                                </span>
                                <div className="w-full flex md:justify-start md:items-center md:gap-16 lg:gap-32">

                                    <ul className="w-full md:w-1/2 flex flex-col md:justify-center md:gap-2 text-base">
                                        <li className="list-disc ml-4">
                                            Tenha sempre uma garrafinha por perto.
                                        </li>
                                        <li className="list-disc ml-4">
                                            Use alarmes ou aplicativos de lembrete.
                                        </li>
                                        <li className="list-disc ml-4">
                                            Coloque frutas e ervas (limão, hortelã) para dar sabor.
                                        </li>
                                        <li className="list-disc ml-4">
                                            Observe sempre a cor da urina.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <img 
                                className="hidden md:block md:w-32 md:h-64 drop-shadow-lg drop-shadow-zinc-600 rounded-xl" 
                                src="./Hidratacao/aguaLembrar.webp" 
                                alt="Como lembrar de tomar água"
                                width={"8rem"}
                                height={"16rem"}
                            />
                        </div>
                        
                        {/* CTA */}
                        <div className="my-4 flex flex-col gap-8 md:my-8 md:flex-row md:flex-wrap md:justify-center   md:items-center md:gap-4">
                            <span className="w-full text-base md:text-lg font-medium italic">
                                Hidratar-se é mais do que matar a sede, é cuidar da sua saúde, da sua mente e da sua energia. Comece hoje mesmo a transformar o simples hábito de beber água em um aliado da sua vida.
                            </span>
                            <div className="md:w-1/3 h-auto flex justify-center rounded-xl">
                                <img 
                                    className="w-[30rem] h-[15rem] drop-shadow-sm drop-shadow-zinc-700 rounded-xl" 
                                    src="./Hidratacao/bebendoAguaSorrindo.webp" 
                                    alt="Mulher bebendo agua feliz"
                                    width={"30rem"}
                                    height={"15rem"}
                                />
                            </div>
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
