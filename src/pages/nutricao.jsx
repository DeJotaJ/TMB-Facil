import AdComponentMobile from "../components/adComponentMobile";

export default function Nutricao(){
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
                        {/* NUTRIÇÃO */}
                        <div className="flex flex-col items-center">
                            <h2 className="w-full mb-8 text-2xl md:hidden font-bold">Nutrição Descomplicada</h2>
                            <h2 className="w-full mb-8 hidden md:block md:text-3xl font-bold">Nutrição Descomplicada: Entenda seu corpo e alimente-se de forma inteligente</h2>
                            <span className="w-full text-base">
                                Descubra como a alimentação influencia sua energia, saúde e resultados — e aprenda a calcular exatamente o que seu corpo precisa.
                            </span>
                            <img className="w-80 h-80 drop-shadow-sm drop-shadow-zinc-700 " src="./Nutricao/balançaAlimentoXEnergia.png" alt="Balança do alimentos e"/>
                        </div>

                        {/* Nutrição: a base da sua saúde e dos seus resultados */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full text-2xl md:text-2xl font-bold">
                                Nutrição: a base da sua saúde e dos seus resultados
                            </h3>
                            <span className="w-full text-base">
                                Seja para perder peso, ganhar massa muscular ou simplesmente ter mais disposição 
                                no dia a dia, tudo começa pela forma como você se alimenta. Mas, para se alimentar 
                                bem, não basta escolher alimentos saudáveis: é preciso entender o quanto seu corpo 
                                realmente precisa.
                            </span>
                            <ul className="w-full">
                                <li className="list-disc ml-4">
                                    Manter o corpo funcionando (respiração, batimentos, temperatura corporal)
                                </li>
                                <li className="list-disc ml-4">
                                    Realizar atividades do dia a dia (andar, trabalhar, estudar)
                                </li>
                                <li className="list-disc ml-4">
                                    Suportar treinos e exercícios físicos
                                </li>
                            </ul>
                            <img className="w-92 h-36 rounded-xl" src="./Nutricao/bateriaAlimentos.png" alt="" />
                        </div>
                        
                        {/* TMB */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-2xl md:text-2xl font-bold">
                                O mínimo de energia para se manter vivo
                            </h3>
                            <span className="w-full text-base">
                                A <b>TMB (Taxa Metabólica Basal)</b> representa a quantidade mínima de energia que seu corpo 
                                gasta em repouso, apenas para manter funções vitais. É o seu consumo energético 'básico', 
                                mesmo que você ficasse deitado o dia inteiro sem fazer nada.
                            </span>
                            <span className="w-full h-auto pl-2 py-2 border-l-3 border-[#121234] bg-zinc-400 italic">
                                💡 Se sua TMB for 1.600 calorias, isso significa que seu corpo gasta 1.600 kcal só para 
                                sobreviver — sem contar atividades do dia a dia.
                            </span>
                            <img className="w-64 h-64 rounded-xl" src="./Nutricao/pessoaDescansando.jpeg" alt="Balança do alimentos e"/>
                        </div>

                        {/* GET */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-2xl md:text-2xl font-bold">
                                O cálculo real do seu gasto diário
                            </h3>
                            <span className="w-full text-base">
                                O <b>GET (Gasto Energético Total)</b> é a soma da sua TMB com todas as suas atividades 
                                diárias. Ele mostra quanto você realmente gasta de energia em um dia normal.
                            </span>
                            <ul className="w-full">
                                <li className="list-disc ml-4">
                                    <b>TMB:</b> energia para funções vitais
                                </li>
                                <li className="list-disc ml-4">
                                    <b>Atividades do dia a dia:</b> trabalhar, estudar, caminhar
                                </li>
                                <li className="list-disc ml-4">
                                    <b>Exercícios físicos:</b> treinos, esportes e academia
                                </li>
                            </ul>
                            <span className="w-full h-auto pl-2 py-2 border-l-3 border-[#121234] bg-zinc-400 italic">
                                🔎 Exemplo: Se sua TMB é 1.600 kcal e você gasta mais 600 kcal em atividades, seu GET 
                                será 2.200 kcal/dia.
                            </span>
                            <img className="w-64 h-64 drop-shadow-md drop-shadow-zinc-500 rounded-xl" src="./Nutricao/infográficoTMBGET.png" alt=""/>
                        </div>
                        
                        {/* Perder, manter ou ganhar peso */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-2xl md:text-2xl font-bold">
                                Perder, manter ou ganhar peso: tudo depende do equilíbrio calórico
                            </h3>
                            <span className="w-full text-base">
                                Depois de conhecer sua TMB e seu GET, você pode ajustar sua alimentação de acordo 
                                com seu objetivo:
                            </span>
                            <ul className="w-full">
                                <li className="list-disc ml-4">
                                    <b>Déficit calórico:</b> consumir menos do que gasta → emagrecimento
                                </li>
                                <li className="list-disc ml-4">
                                    <b>Manutenção calórica:</b> consumir o mesmo que gasta → peso estável
                                </li>
                                <li className="list-disc ml-4">
                                    <b>Superávit calórico:</b> consumir mais do que gasta → ganho de massa muscular
                                </li>
                            </ul>
                            <div className="w-full flex justify-center items-center md:gap-2">
                                <img className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-64 md:h-48 drop-shadow-lg drop-shadow-zinc-600 rounded-xl" src="./Nutricao/refPequena01.png" alt=""/>
                                <img className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-64 md:h-52 drop-shadow-lg drop-shadow-zinc-600 rounded-xl" src="./Nutricao/refMedia01.png" alt=""/>
                                <img className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-64 md:h-44 drop-shadow-lg drop-shadow-zinc-700 rounded-xl" src="./Nutricao/refGrande01.png" alt=""/>
                            </div>
                            
                        </div>
                        
                        {/* CTA */}
                        <div className="my-4 flex flex-col gap-8 md:my-8 md:flex-row md:flex-wrap md:items-center md:gap-0">
                            <h3 className="w-full mb-0 text-2xl md:text-2xl font-bold">
                                Alimentar-se bem é conhecer seu corpo
                            </h3>
                            <div className="md:w-2/3 flex flex-col gap-4">
                                <span className="w-full text-base">
                                    Nutrição não precisa ser complicada. Quando você entende suas necessidades 
                                    calóricas, a TMB e o GET, consegue montar um plano alimentar inteligente, flexível 
                                    e sustentável — sem dietas malucas.
                                </span>
                                <span className="w-full text-base">
                                    Quer descobrir sua TMB agora? Use nossa calculadora e veja quantas calorias seu corpo realmente precisa.
                                </span>
                                <a className="w-full px-4 py-0.5 text-base text-center md:w-fit bg-[#121224] text-[#E7E7E7] rounded-lg hover:underline hover:text-[#FFFFFF] hover:font-bold" href="./calculadora">Calcule sua TMB agora</a>
                            </div>
                            <div className="md:w-1/3 h-auto flex justify-center rounded-xl">
                                <img className="w-60 h-60 drop-shadow-sm drop-shadow-zinc-700 rounded-xl" src="./Nutricao/garoto-adolescente-comendo-na-mesa.png" alt=""/>
                            </div>
                        </div>
                    </section>
                </article>
                {/* ANUNCIOS*/}
                    <div className="hidden lg:w-1/6 max-h-full border-2 border-blue-600/0 py-4 px-2 md:flex flex-wrap items-start justify-center rounded-lg"> 
                        <AdComponentMobile/>
                    </div>
                {/* ANUNCIOS */}
            </div>
        </>
    )
}
