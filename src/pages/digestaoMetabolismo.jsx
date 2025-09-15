import AdComponentMobile from "../components/adComponentMobile";

export default function Digestao(){
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
                        {/* Digestão e Metabolismo: como seu corpo transforma alimento em energia */}
                        <div className="flex flex-col items-center">
                            <h2 className="w-full mb-8 text-2xl md:hidden font-bold">Digestão e Metabolismo</h2>
                            <h2 className="w-full mb-8 hidden md:block md:text-3xl font-bold">Digestão e Metabolismo: como seu corpo transforma alimento em energia</h2>
                            <span className="w-full text-base">
                                Você já parou para pensar o que acontece depois que come um prato de arroz e feijão? 
                                O alimento não some magicamente — ele passa por um processo incrível de <b>digestão e 
                                metabolismo</b>, que transforma cada garfada em energia para seu corpo funcionar. Vamos 
                                entender, de forma simples e clara, como isso acontece.
                            </span>
                            <img className="w-80 h-80 drop-shadow-sm drop-shadow-zinc-700 " src="./Nutricao/balançaAlimentoXEnergia.png" alt="Balança do alimentos e"/>
                        </div>

                        {/* O que é Digestão? */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full text-2xl md:text-2xl font-bold">
                                O que é Digestão?
                            </h3>
                            <span className="w-full text-base">
                                A digestão é o processo que quebra os alimentos em partes 
                                menores para que o corpo consiga <b>absorver nutrientes</b> e usá-los. 
                                Ela combina movimentos mecânicos (mastigação, contrações do 
                                estômago e intestino) com <b>reações químicas</b> (enzimas, ácidos, hormônios).
                            </span>
                            <img className="w-92 h-36 rounded-xl" src="./Digestao/sistemaDigestivo.jpg" alt="" />
                        </div>
                        
                        {/* Etapas da Digestão */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-2xl md:text-2xl font-bold">
                                O mínimo de energia para se manter vivo
                            </h3>
                            <ol className="w-full font-bold">
                                <li className="list-decimal ml-4">
                                    Boca 🦷
                                    <ul className="w-full font-normal">
                                        <li className="list-disc ml-4">Mastigação quebra os alimentos.</li>
                                        <li className="list-disc ml-4">A saliva (amilase) já começa a digerir o amido.</li>
                                    </ul>
                                </li>
                                <li className="list-decimal ml-4">
                                    Estômago 🍲
                                    <ul className="w-full font-normal">
                                        <li className="list-disc ml-4">Suco gástrico dissolve principalmente proteínas.</li>
                                        <li className="list-disc ml-4">Forma o quimo (massa semilíquida).</li>
                                    </ul>
                                </li>
                                <li className="list-decimal ml-4">
                                    Intestino Delgado 🌱
                                    <ul className="w-full font-normal">
                                        <li className="list-disc ml-4">Onde ocorre a maior digestão e absorção.</li>
                                        <li className="list-disc ml-4">Pâncreas → enzimas.</li>
                                        <li className="list-disc ml-4">Fígado → bile (quebra gorduras).</li>
                                        <li className="list-disc ml-4">Nutrientes caem no sangue.</li>
                                    </ul>
                                </li>
                                <li className="list-decimal ml-4">
                                    Intestino Grosso ♻️
                                    <ul className="w-full font-normal">
                                        <li className="list-disc ml-4">Absorve água.</li>
                                        <li className="list-disc ml-4">Microbiota ajuda a produzir vitaminas e fermenta fibras.</li>
                                    </ul>
                                </li>
                            </ol>
                            <div className="w-full flex justify-center items-center md:gap-16">
                                <img 
                                    className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-48 md:h-48 drop-shadow-lg drop-shadow-zinc-600 rounded-xl" 
                                    src="./Digestao/boca.png" alt="Imagem da boca"
                                    width={"12rem"}
                                    height={"12rem"}
                                />
                                <img 
                                    className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-48 md:h-48 drop-shadow-lg drop-shadow-zinc-600 rounded-xl" 
                                    src="./Digestao/estomago.png" alt="Imagem do Estômago"
                                    width={"12rem"}
                                    height={"12rem"}
                                />
                                <img 
                                    className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-48 md:h-48 drop-shadow-lg drop-shadow-zinc-700 rounded-xl" 
                                    src="./Digestao/intestino.png" alt="Imagem do Intestino"
                                    width={"12rem"}
                                    height={"12rem"}
                                />
                            </div>
                        </div>

                        {/* O que é Metabolismo? */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-2xl md:text-2xl font-bold">
                                O que é Metabolismo?
                            </h3>
                            <span className="w-full text-base">
                                Depois que os nutrientes entram no sangue, começa o 
                                <b>metabolismo</b> — o conjunto de reações químicas que gera energia e mantém o corpo em funcionamento.
                            </span>
                            <img className="w-64 h-64 drop-shadow-md drop-shadow-zinc-500 rounded-xl" src="./Nutricao/infográficoTMBGET.png" alt=""/>
                        </div>
                        
                        {/* Tipos de Metabolismo */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-2xl md:text-2xl font-bold">
                                Tipos de Metabolismo
                            </h3>
                            <div className="w-full flex flex-wrap">
                                <ul className="w-1/2 flex flex-col items-center">
                                    <li className="w-full"> Catabolismo
                                        <ul className="w-full h-20">
                                            <li className="list-disc ml-4">
                                                Quebra moléculas grandes em pequenas.
                                            </li>
                                            <li className="list-disc ml-4">
                                                Libera energia.
                                            </li>
                                            <li className="list-disc ml-4">
                                                Exemplo: glicose → energia (ATP).
                                            </li>
                                        </ul>
                                    </li>
                                    <img 
                                        className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-64 md:h-64 drop-shadow-lg drop-shadow-zinc-600 rounded-xl
                                        " src="./Digestao/catabolismo.png" 
                                        alt=""
                                    />
                                </ul>
                                <ul className="w-1/2 flex flex-col items-center">
                                    <li className="w-full"> Anabolismo
                                        <ul className="w-full h-20">
                                            <li className="list-disc ml-4">
                                                Constrói moléculas usando energia.
                                            </li>
                                            <li className="list-disc ml-4">
                                                Exemplo: aminoácidos → músculos.
                                            </li>
                                        </ul>
                                    </li>
                                    <img 
                                        className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-64 md:h-64 drop-shadow-lg drop-shadow-zinc-600 rounded-xl" 
                                        src="./Digestao/anabolismo.png" 
                                        alt=""
                                    />
                                </ul>
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
                {/* ANUNCIOS*/}
            </div>
        </>
    )
}
