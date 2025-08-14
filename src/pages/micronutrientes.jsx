export default function Macronutrientes(){
    return(
        <>
            <div className="relative w-full min-h-[80dvh] flex justify-center  bg-[#1B2C35] text-white">
                    <main className="
                            w-full  text-sm  flex flex-col items-center gap-0 py-4 px-4  bg-[#002233]
                            md:w-3/4 lg:w-2/3 lg:text-base lg:px-12 lg:py-8 lg:justify-start lg:items-start
                    ">
                        <h1 className="w-full text-2xl mt-2 md:text-center md:text-4xl font-black">Micronutrientes</h1>
                        <h2 className="hidden lg:w-full lg:block lg:mb-2 lg:text-center lg:text-md font-light italic">
                            Nutrientes essenciais para o corpo humano manter o bom funcionamento do organismo
                        </h2>
                        <div class="my-8 md:my-12 text-justify leading-relaxed">
                            <img
                                class="w-32 md:w-40 lg:w-64 h-auto lg:h-auto lg:mt-0 object-contain float-left mt-2 mr-4 rounded"
                                src="./micronutrientes.png" alt="micronutrientes"
                            />
                            <p className="md:text-base text-sm">
                                Micronutrientes são nutrientes essenciais, como vitaminas e minerais, que o corpo necessita em quantidades muito 
                                pequenas — miligramas ou microgramas por dia — para manter funções vitais e proteger a saúde. Embora não forneçam energia, 
                                são indispensáveis na defesa antioxidante, no metabolismo, na imunidade e em muitas outras funções biológicas
                            </p>
                        </div>
                        <h2 className="w-full md:my-2 lg:my-8 text-center text-2xl font-semibold">Importância para o Corpo</h2>
                        <div className="py-4 flex items-center gap-4 lg:flex-row lg:gap-8 lg:px-4">
                            <span className="flex flex-col text-base lg:text-lg">
                                <ul className="list-disc list-inside space-y-4">
                                    <li><b>Fortalecimento do sistema imunológico:</b> Vitaminas C, D e minerais como zinco e selênio são essenciais contra infecções</li>
                                    <li><b>Metabolismo energético:</b> Vitaminas do complexo B e minerais como ferro e magnésio são cruciais na produção de energia</li>
                                    <li>
                                        <b>Saúde óssea, tecidual e visual:</b> A vitamina A favorece a visão e a imunidade; a D regula o cálcio; o zinco e o ferro são 
                                        importantes para crescimento, funções cognitivas e geração de hemácias
                                    </li>
                                    <li><b>Proteção antioxidante:</b> Vitaminas E, C e selênio combatem os radicais livres, protegendo as células</li>
                                    <li>
                                        <b>Desempenho físico e recuperação muscular:</b> Vitaminas B, C e D, além de minerais como ferro, magnésio, cálcio e zinco, 
                                        influenciam desempenho, força, resistência e recuperação em quem pratica atividade física
                                    </li>
                                </ul>
                            </span>
                            <div className="hidden md:flex md:flex-col">
                                <img className="w-16 md:w-[36rem] h-auto lg:w-80 md:h-auto" src="./fortalecimentoDoSistemaImunologico.png" alt="Gráfico de Macros" />
                                <img className="w-16 md:w-[36rem] h-auto lg:w-80 md:h-auto" src="./ilustracaoAbstratadaAptidaoDoIdoso.png" alt="Gráfico de Macros" />
                                <img className="w-16 md:w-[36rem] h-auto lg:w-80 md:h-auto" src="./metabolismoEnergetico.png" alt="Gráfico de Macros" />
                            </div>
                        </div>
                        <h2 className="w-full mt-8 text-center text-2xl lg:text-3xl font-semibold">Melhores Fontes Alimentares</h2>
                        <div className="w-full flex flex-wrap md:justify-around">
                            <h3 className="w-full order-0 md:order-0 mt-4 text-lg md:w-[50%] lg:w-1/2 text-center font-semibold md:text-lg lg:text-xl">Vitamínas</h3>
                            <h3 className="w-full order-2 md:order-0 mt-4 text-lg md:w-[50%] lg:w-1/2 text-center font-semibold md:text-lg lg:text-xl">Minerais</h3>
                            <ul className="w-full order-1 md:order-0 md:w-[48%] lg:w-[48%] list-disc list-inside">
                                <li className="mt-2">Lipossolúveis (A, D, E, K)
                                    <ul className="ml-4 list-disc list-inside">
                                        <li>A: cenoura, abóbora, fígado, manga</li>
                                        <li>D: sol, peixes gordurosos, gema de ovo</li>
                                        <li>E: nozes, sementes, óleos vegetais</li>
                                        <li>K: folhas verdes, brócolis, couve</li>
                                    </ul>
                                </li>
                                <li className="mt-4">Hidrossolúveis (Complexo B e C)
                                    <ul className="ml-4 list-disc list-inside">
                                        <li>B (B1, B2, B3, B6, B9, B12, biotina): carnes, ovos, leguminosas, grãos integrais, vegetais verdes</li>
                                        <li>C: frutas cítricas, morango, kiwi, pimentão</li>
                                    </ul>
                                </li>
                            </ul>
                            <hr className="hidden md:block text-zinc-100 bg-zinc-100 w-0.5 h-full md:h-10/12 md:my-2" />
                            <ul className="w-full order-3 md:order-0 md:w-[48%] lg:w-[48%] list-disc list-inside pl-1">
                                <li className="mt-2">Macrominerais
                                    <ul className="ml-4 list-disc list-inside">
                                        <li>Cálcio & Fósforo: leite, derivados, tofu, vegetais verdes</li>
                                        <li>Magnésio: cereais integrais, verduras, banana, nozes</li>
                                        <li>Potássio: banana, batata, legumes, frutas cítricas</li>
                                    </ul>
                                </li>
                                <li className="mt-4">Microminerais
                                    <ul className="ml-4 list-disc list-inside">
                                        <li>Ferro: carnes vermelhas, leguminosas, verduras escuras</li>
                                        <li>Zinco: carnes, castanhas, sementes</li>
                                        <li>Iodo: sal iodado, peixes, frutos do mar</li>
                                        <li>Selênio: castanha-do-Pará, sardinha</li>
                                        <li>Cobre, Manganês, Flúor: fígado, nozes, leguminosas, algas</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <a 
                            href="/calculadora" 
                            title="Calculadora de Taxa Metabólica Basal(TMB)" 
                            className="mt-8 mb-4 text-[0.9rem] md:text-lg font-semibold hover:font-bold hover:text-[#00A6C0] hover:cursor-pointer text-[#aef4ff]">
                                Veja como calcular sua TMB (Taxa Metabólica Basal)
                        </a>
                        <p className="md:w-5/5 text-center bg-[#f5ff63] text-[#002233] rounded-lg px-2 py-1 text-sm md:text-base font-normal uppercase">
                            Não existe dieta ideal sem equilíbrio! Cada pessoa tem uma necessidade diferente.
                            <br/> 
                            <b>Consulte um nutricionista para ajustar sua alimentação.</b>
                        </p>
                        
                        
                    </main>
            </div>
        </>
    )
}