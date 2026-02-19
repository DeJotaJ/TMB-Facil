import AdComponentMobile from "../components/adComponentMobile";

export default function Digestao(){
    return(
        <>
            <div className="relative w-full min-h-screen flex justify-center  bg-[#E7E7E7] text-[#121224]">
                {/* ANUNCIOS
                    <div className="hidden lg:w-1/6 max-h-full border-2 border-blue-600/0 py-4 px-2 md:flex flex-wrap items-start justify-center rounded-lg"> 
                        <AdComponentMobile/>
                    </div>
                 ANUNCIOS*/}
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
                            <h2 className="w-full mb-2 text-2xl md:hidden font-bold">Digestão e Metabolismo</h2>
                            <h2 className="w-full mb-8 hidden md:block md:text-3xl font-bold">Digestão e Metabolismo: como seu corpo transforma alimento em energia</h2>
                            <span className="w-full text-base">
                                Você já parou para pensar o que acontece depois que come um prato de arroz e feijão? 
                                O alimento não some magicamente — ele passa por um processo incrível de <b>digestão e 
                                metabolismo</b>, que transforma cada garfada em energia para seu corpo funcionar. Vamos 
                                entender, de forma simples e clara, como isso acontece.
                            </span>
                        </div>

                        {/* O que é Digestão? */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full text-xl md:text-2xl font-bold">
                                O que é Digestão?
                            </h3>
                            <span className="w-full text-base">
                                A digestão é o processo que quebra os alimentos em partes 
                                menores para que o corpo consiga <b>absorver nutrientes</b> e usá-los. 
                                Ela combina movimentos mecânicos (mastigação, contrações do 
                                estômago e intestino) com <b>reações químicas</b> (enzimas, ácidos, hormônios).
                            </span>
                            <img className="w-92 h-56 rounded-xl drop-shadow-xs drop-shadow-zinc-500 " src="./Digestao/sistemaDigestivo.webp" alt="" />
                        </div>
                        
                        {/* Etapas da Digestão */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
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
                                    className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-48 md:h-48 drop-shadow-md drop-shadow-zinc-400 rounded-xl" 
                                    src="./Digestao/boca.webp" alt="Imagem da boca"
                                    width={"12rem"}
                                    height={"12rem"}
                                />
                                <img 
                                    className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-48 md:h-48 drop-shadow-md drop-shadow-zinc-400 rounded-xl" 
                                    src="./Digestao/estomago.webp" alt="Imagem do Estômago"
                                    width={"12rem"}
                                    height={"12rem"}
                                />
                                <img 
                                    className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-48 md:h-48 drop-shadow-md drop-shadow-zinc-400 rounded-xl" 
                                    src="./Digestao/intestino.webp" alt="Imagem do Intestino"
                                    width={"12rem"}
                                    height={"12rem"}
                                />
                            </div>
                        </div>

                        {/* O que é Metabolismo? */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
                                O que é Metabolismo?
                            </h3>
                            <span className="w-full text-base">
                                Depois que os nutrientes entram no sangue, começa o 
                                <b> metabolismo</b> — o conjunto de reações químicas que gera energia e mantém o corpo em funcionamento.
                            </span>
                        </div>
                        
                        {/* Tipos de Metabolismo */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
                                Tipos de Metabolismo
                            </h3>
                            <div className="w-full flex flex-wrap">
                                <ul className="w-1/2 flex flex-col items-start">
                                    <li className="w-full font-semibold"> Catabolismo
                                        <ul className="w-full h-20 font-normal">
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
                                        className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-64 md:h-64 mt-6 md:m-0 drop-shadow-md drop-shadow-zinc-200 rounded-xl
                                        " src="./Digestao/catabolismo.webp" 
                                        alt="Catabolismo"
                                        width={"16rem"}
                                        height={"16rem"}
                                    />
                                </ul>
                                <ul className="w-1/2 flex flex-col items-start">
                                    <li className="w-full font-semibold"> Anabolismo
                                        <ul className="w-full h-20 font-normal">
                                            <li className="list-disc ml-4">
                                                Constrói moléculas usando energia.
                                            </li>
                                            <li className="list-disc ml-4">
                                                Exemplo: aminoácidos → músculos.
                                            </li>
                                        </ul>
                                    </li>
                                    <img 
                                        className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-64 md:h-64 mt-6 md:m-0 drop-shadow-md drop-shadow-zinc-200 rounded-xl" 
                                        src="./Digestao/anabolismo.webp" 
                                        alt="Anabolismo"
                                        width={"16rem"}
                                        height={"16rem"}
                                    />
                                </ul>
                            </div>
                            
                        </div>

                        {/* Nutrientes e seu Destino */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
                                Nutrientes e seu Destino
                            </h3>
                            <ul className="w-full flex flex-col text-base md:text-lg">
                                <li className="list-disc ml-4">
                                    <b>Carboidratos → glicose →</b> energia rápida ⚡
                                </li>
                                <li className="list-disc ml-4">
                                    <b>Proteínas → aminoácidos →</b> músculos, enzimas, hormônios 💪
                                </li>
                                <li className="list-disc ml-4">
                                    <b>Gorduras → ácidos graxos e glicerol →</b> energia de reserva, hormônios 🛡️
                                </li>
                                <li className="list-disc ml-4">
                                    <b>Vitaminas e Minerais →</b> reguladores de reações químicas 🔧
                                </li>
                                <li className="list-disc ml-4">
                                    <b>Água →</b> transporte e equilíbrio do corpo 💧
                                </li>
                            </ul>
                            
                        </div>

                        {/* Taxa Metabólica Basal (TMB) */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
                                Taxa Metabólica Basal (TMB)
                            </h3>
                            <span className="w-full h-auto pl-2 py-2 border-l-3 border-[#121234] bg-zinc-400 font-medium italic">
                                Sabia que seu corpo gasta energia até dormindo?
                            </span>
                            <span className="w-full text-base md:text-lg">
                                A TMB é a quantidade mínima de energia que o corpo gasta para se manter 
                                vivo em repouso — manter o coração batendo, o cérebro funcionando e a temperatura estável.
                            </span>
                            
                        </div>
                        
                        {/* Metabolismo Energético */}
                        <div className="flex flex-col items-center gap-4 my-4 md:my-8">
                            <h3 className="w-full mb-0 text-xl md:text-2xl font-bold">
                                Metabolismo Energético
                            </h3>
                            <span className="w-full text-base md:text-lg">
                                O corpo prefere usar glicose como fonte de energia. Quando ela acaba, 
                                passa a usar gordura (estado de cetose). Em situações extremas, até 
                                proteínas podem ser quebradas — o que leva à perda de massa muscular.
                            </span>
                            <img 
                                className="w-32 h-32 max-[390px]:w-28 max-[390px]:h-28 md:w-64 md:h-48 drop-shadow-lg drop-shadow-zinc-600 rounded-xl"
                                src="./Digestao/piramide.webp" 
                                alt="Pirâmide de prioridade de macronutrientes"
                                width={"16rem"}
                                height={"12rem"}
                            />
                            
                        </div>
                        
                        {/* CTA */}
                        <div className="my-4 flex flex-col gap-8 md:my-8 md:flex-row md:flex-wrap md:items-center md:gap-4">
                            <span className="w-full text-base md:text-lg">
                                A digestão e o metabolismo são como uma grande usina dentro de você: 
                                transformam comida em energia, constroem tecidos e mantêm seu corpo funcionando. 
                                Quanto mais você entende sobre eles, mais fácil fica fazer escolhas inteligentes 
                                para a sua saúde e qualidade de vida.
                            </span>
                            <a 
                                className="w-full px-4 py-0.5 text-base text-center md:w-fit bg-[#121224] text-[#E7E7E7] rounded-lg 
                                hover:underline hover:text-[#FFFFFF] hover:font-bold" 
                                href="./calculadora"
                            >
                                Calcule agora sua TMB e descubra suas necessidades energéticas
                            </a>
                        </div>
                    </section>
                </article>
                {/* ANUNCIOS
                    <div className="hidden lg:w-1/6 max-h-full border-2 border-blue-600/0 py-4 px-2 md:flex flex-wrap items-start justify-center rounded-lg"> 
                        <AdComponentMobile/>
                    </div>
                 ANUNCIOS*/}
            </div>
        </>
    )
}
