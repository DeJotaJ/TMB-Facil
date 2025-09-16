export default function Micronutrientes() {
    return (
        <>
            <div className="relative w-full min-h-[80dvh] flex justify-center  bg-[#E7E7E7] text-[#121224]">
                <main className="
                            w-full  text-sm  flex flex-col items-center gap-12 py-4 px-4  bg-[#E0E0E0] md:shadow-[0_4px_8px] md:shadow-[#a0a0a0]
                            md:w-3/4 
                            lg:w-2/3 lg:text-base lg:px-12 lg:py-8 lg:justify-start lg:items-center md:gap-12
                    ">
                    {/* APRESENTAÇÃO */}
                    <div className="flex flex-col gap-4 items-center">
                        <h1 className="w-full max-[420px]:text-xl text-2xl text-center lg:text-3xl font-black">Vitaminas e Minerais: Os Tijolos Essenciais da Sua Saúde</h1>
                        <h2 className="hidden lg:w-full lg:block lg:text-center lg:text-lg font-light italic">
                            Vitaminas e minerais que fazem toda a diferença no seu corpo — mesmo em quantidades minúsculas.
                        </h2>
                        <img
                            class="w-52 h-32 md:w-[512px] md:h-64"
                            src="./Micro/micronutrientes.webp" 
                            alt="micronutrientes"
                            height={"16rem"}
                        />
                    </div>
                    {/* PORQUE SÃO IMPORTANTES */}
                    <div className="flex flex-col gap-2 md:gap-4 justify-center text-lg md:text-xl">
                        <h2 className="w-full max-[420px]:text-xl text-2xl md:text-[28px] font-semibold">
                            Por que Vitaminas e Minerais são tão importantes?
                        </h2>
                        <p className="max-[420px]:text-lg text-xl">
                            Apesar de precisarmos deles em pequenas quantidades, as vitaminas e minerais
                            são fundamentais para manter nosso corpo funcionando. Eles regulam processos vitais,
                            fortalecem a imunidade, protegem contra doenças e até influenciam nosso humor e energia diária.
                            Sem eles, ficamos vulneráveis, cansados e com risco maior de desenvolver problemas de saúde.
                        </p>
                    </div>

                    {/* VITAMINAS */}
                    <div className="flex flex-col gap-2 md:gap-4 justify-center text-lg md:text-xl">
                        <h2 className="w-full max-[420px]:text-xl text-2xl md:text-[28px] font-semibold">
                            Vitaminas: Pequenas, mas poderosas!
                        </h2>
                        <p className="max-[420px]:text-lg text-xl">
                            As vitaminas são compostos orgânicos que atuam como reguladores. Elas não dão energia
                            diretamente, mas sem elas, seu corpo não consegue funcionar bem. Dividimos em lipossolúveis
                            (armazenadas na gordura) e hidrossolúveis (não armazenadas, precisam ser consumidas sempre).
                        </p>
                    </div>
                    {/* LOPOSSOLUVEIS */}
                    <div className="w-full flex flex-col max-[420px]:gap-0 gap-4 md:gap-4 justify-center text-lg md:text-xl">
                        <h3 className="font-medium max-[420px]:text-xl text-2xl">Vitaminas Lipossolúveis</h3>
                        <span className="font-semibold max-[420px]:text-lg text-xl">A, D, E e K: Guardiãs de longo prazo</span>
                        <ul className="max-[420px]:text-lg text-xl">
                            <li className="list-disc ml-4"><span className="font-semibold">Vitamina D:</span> ossos fortes e imunidade. → Sol, peixes gordurosos, ovos.</li>
                            <li className="list-disc ml-4"><span className="font-semibold">Vitamina E:</span> antioxidante, protege células. → Oleaginosas e óleos vegetais.</li>
                            <li className="list-disc ml-4"><span className="font-semibold">Vitamina K:</span> coagulação e ossos. → Folhas verdes, brócolis, fígado.</li>
                        </ul>
                    </div>

                    {/* HIDROSSOLUVEIS */}
                    <div className="w-full flex flex-col max-[420px]:gap-0 gap-4 md:gap-4 justify-center text-lg md:text-xl">
                        <h3 className="font-medium max-[420px]:text-xl text-2xl">Vitaminas Hidrossolúveis</h3>
                        <span className="font-semibold max-[420px]:text-lg text-xl">Complexo B + Vitamina C: Energia e defesa diária</span>
                        <div className="w-full flex flex-col lg:flex-row gap-2">
                            <ul className="lg:w-1/2 max-[420px]:text-lg text-xl">
                                <li className="list-disc ml-4"><span className="font-semibold">Vitamina C:</span> colágeno, imunidade e absorção de ferro. → Acerola, laranja, kiwi.</li>
                                <li className="list-disc ml-4"><span className="font-semibold">Complexo B:</span> energia, cérebro e sangue.</li>
                                <li className="list-none ml-8"><span className="font-semibold">○ B1:</span> metabolismo</li>
                                <li className="list-none ml-8"><span className="font-semibold">○ B2:</span> pele e visão</li>
                                <li className="list-none ml-8"><span className="font-semibold">○ B3:</span> energia</li>
                                <li className="list-none ml-8"><span className="font-semibold">○ B5:</span> hormônios</li>
                                <li className="list-none ml-8"><span className="font-semibold">○ B6:</span> neurotransmissores</li>
                                <li className="list-none ml-8"><span className="font-semibold">○ B9:</span> essencial na gravidez</li>
                                <li className="list-none ml-8"><span className="font-semibold">○ B12:</span> sangue e sistema nervoso</li>
                            </ul>
                            <img
                                className="lg:w-[30rem] lg:h-[22rem]"
                                src="https://static.todamateria.com.br/upload/ta/be/tabeladevitaminab-cke.jpg"
                                alt="Tabela Vitamina B"
                            />
                        </div>
                    </div>

                    {/* MINERAIS */}
                    <div className="flex flex-col gap-4 items-center text-xl">
                        <h2 className="w-full max-[420px]:text-xl text-xl md:text-[28px] font-semibold">
                            Minerais: A base estrutural do corpo
                        </h2>
                        <p className="max-[420px]:text-lg">
                            São elementos inorgânicos essenciais. Eles fortalecem ossos, regulam músculos, equilibram líquidos e participam de praticamente todos os processos do organismo.
                        </p>
                        <img
                            class="w-80 h-92 md:w-80 md:h-92"
                            src="./Micro/arvoreMicronutrientes.webp" 
                            alt="micronutrientes"
                            width={"20rem"}
                            height={"23rem"}
                        />
                    </div>

                    <div className="w-full flex flex-col max-[420px]:gap-0 gap-4 justify-center">
                        <h3 className="font-medium max-[420px]:text-xl text-2xl">Macrominerais</h3>
                        <span className="font-semibold max-[420px]:text-lg text-xl">Os grandes pilares da saúde</span>
                        <ul className="max-[420px]:text-lg text-xl">
                            <li className="list-disc ml-4"><span className="font-semibold">Cálcio:</span> ossos e dentes. → Leite, queijo, couve.</li>
                            <li className="list-disc ml-4"><span className="font-semibold">Fósforo:</span> energia (ATP). → Carnes, leguminosas.</li>
                            <li className="list-disc ml-4"><span className="font-semibold">Magnésio:</span> relaxamento muscular. → Sementes, espinafre.</li>
                            <li className="list-disc ml-4"><span className="font-semibold">Potássio</span> músculos e nervos. → Banana, batata.</li>
                            <li className="list-disc ml-4"><span className="font-semibold">Sódio:</span> equilíbrio hídrico (com moderação). → Sal.</li>
                        </ul>
                    </div>

                    <div className="w-full flex flex-col max-[420px]:gap-0 text-xl gap-4 justify-center">
                        <h3 className="font-medium max-[420px]:text-xl text-2xl">Microminerais</h3>
                        <span className="font-semibold max-[420px]:text-lg text-xl">Pequenos em quantidade, gigantes na função</span>
                        <ul className="max-[420px]:text-lg text-xl">
                            <li className="list-disc ml-4"><span className="font-semibold"> Ferro:</span> transporte de oxigênio. → Feijão, carnes.</li>
                            <li className="list-disc ml-4"><span className="font-semibold"> Zinco:</span> imunidade e cicatrização. → Frutos do mar, sementes.</li>
                            <li className="list-disc ml-4"><span className="font-semibold"> Iodo:</span> tireoide. → Sal iodado, peixes.</li>
                            <li className="list-disc ml-4"><span className="font-semibold"> Selênio:</span> antioxidante. → Castanha-do-pará.</li>
                            <li className="list-disc ml-4"><span className="font-semibold"> Flúor:</span> dentes fortes. → Água fluoretada.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h2 className="w-full h-auto text-xl md:text-[28px] font-semibold">Pequenas doses, grandes impactos!</h2>
                        <p className="w-full h-auto  max-[420px]:text-lg text-xl">
                            Vitaminas e minerais não são apenas “detalhes” da nutrição, eles são a base invisível que sustenta sua energia, imunidade e bem-estar.
                            <br />
                            Por isso, antes de pensar em suplementos caros, lembre-se: uma alimentação variada, colorida e equilibrada já é o suficiente para garantir o combustível certo para o seu corpo funcionar no máximo!
                        </p>
                        <img
                            className="w-60 h-60 md:w-64 md:h-64 rounded-3xl"
                            src="./Micro/pratoColorido.webp"
                            alt="Prato Colorido"
                            width={"16rem"}
                            height={"16rem"}
                        />
                        <h3 className="text-lg hidden"> ► Veja também sobre micronutrientes</h3>
                    </div>
                    <p className="md:w-5/5 text-center bg-[#121220] text-[#F0F0F0] rounded-lg px-2 py-1 text-base font-sans uppercase">
                        Não existe dieta ideal sem equilíbrio! Cada pessoa tem uma necessidade diferente.
                        <br />
                        <b className="font-bold">Consulte um nutricionista para ajustar sua alimentação.</b>
                    </p>


                </main>
            </div>
        </>
    )
}