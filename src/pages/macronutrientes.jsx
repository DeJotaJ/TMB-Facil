export default function Macronutrientes(){
    return(
        <>
            <div className="relative w-full min-h-[80dvh] flex justify-center  bg-[#E7E7E7] text-[#121224]">
                    <main className="
                            w-full  text-sm  flex flex-col items-center gap-12 py-4 px-4  bg-[#E0E0E0] md:shadow-[0_4px_8px] md:shadow-[#a0a0a0]
                            md:w-3/4 
                            lg:w-2/3 lg:text-base lg:px-12 lg:py-8 lg:justify-start lg:items-start lg:gap-12
                    ">
                        {/* APRESENTAÇÃO */}
                        <div className="flex flex-col gap-3 items-center max-[420px]:mb-4">
                            <h1 className="w-full max-[420]:text-xl text-2xl mt-2 lg:text-3xl font-black">Macronutrientes: O combustível do seu corpo</h1>
                            <span className="w-full h-auto max-[420px]:text-lg text-xl">
                                Você já parou para pensar no que realmente alimenta suas células e mantém seu corpo em movimento? Esses 
                                elementos são chamados de macronutrientes: proteínas, carboidratos, gorduras e água. Nesta página, você vai 
                                entender de forma simples e prática para que serve cada um deles e como influenciam sua saúde, disposição e 
                                até mesmo seus resultados na dieta.
                            </span>
                            <img
                                class="w-48 md:w-56 lg:w-64 h-auto md:h-auto lg:mt-4 object-contain float-left mt-2 mr-4 rounded"
                                src="./Macro/macronutrientes02.png" alt="macronutrientes"
                            />
                        </div>
                        
                        {/* PROTEÍNAS */}
                        <div className="flex flex-col gap-4 justify-center max-[420px]:mb-4">
                            <h2 className="w-full h-auto text-2xl md:text-[28px] font-semibold">Proteínas</h2>
                            <h3 className="w-full h-auto text-xl md:text-2xl font-semibold">
                                🥩 Proteínas: os tijolos que constroem você
                            </h3>
                            <p className="w-full h-auto max-[420px]:text-lg text-xl">
                                As proteínas são como os <span className="font-semibold">tijolos que formam o seu corpo.</span> Elas estão 
                                nos músculos, na pele, no cabelo, nas unhas, nos hormônios e até nas 
                                defesas do seu organismo.
                            </p>
                            <ul className="max-[420px]:text-base text-xl">
                                <li className="list-disc ml-4">Constroem e reparam músculos e tecidos</li>
                                <li className="list-disc ml-4">Produzem enzimas e hormônios</li>
                                <li className="list-disc ml-4">Fazem parte do sistema imunológico</li>
                                <li className="list-disc ml-4">Podem gerar energia (4 kcal por grama)</li>
                            </ul>
                        </div>
                        
                        {/* CARBOÍDRATOS */}
                        <div className="flex flex-col gap-4 justify-center max-[420px]:mb-4">
                            <h2 className="w-full h-auto text-2xl md:text-[28px] font-semibold">Carboidratos</h2>
                            <h3 className="w-full h-auto text-xl md:text-2xl font-semibold">🍞 Carboidratos: sua principal fonte de energia</h3>
                            <p className="w-full h-auto max-[420px]:text-lg text-xl">
                                São <span className="font-semibold">os combustíveis preferidos do corpo</span>. Cérebro, músculos e até o coração dependem deles para funcionar bem. Mas atenção: existem carboidratos que dão energia por mais tempo e outros que causam picos de glicose.
                            </p>
                            <ul className="max-[420px]:text-base text-xl">
                                <li className="list-disc ml-4"><span className="font-semibold">Simples (rápidos):</span> açúcar, doces, refrigerantes (energia imediata, pouca saciedade).</li>
                                <li className="list-disc ml-4"><span className="font-semibold">Complexos (lentos):</span> arroz integral, aveia, batata-doce, frutas (energia constante, mais saciedade).</li>
                            </ul>
                            <p className="w-full px-4 py-2 max-[420px]:text-base text-xl bg-[#A7A7A7] italic border-l-4 border-[#121224]">
                                💡 Dica rápida: <span className="font-semibold">Não corte totalmente os carboidratos</span>. O segredo é escolher os certos.
                            </p>
                        </div>
                        
                        {/* GORDURAS */}
                        <div className="flex flex-col gap-4 justify-center max-[420px]:mb-4">
                            <h2 className="w-full h-auto text-2xl md:text-[28px] font-semibold">Gorduras (Lipídios)</h2>
                            <h3 className="w-full h-auto text-xl md:text-2xl font-semibold">🥑 Gorduras: energia concentrada e hormônios equilibrados</h3>
                            <p className="w-full h-auto max-[420px]:text-lg text-xl">
                                Durante muito tempo, as gorduras foram vistas como vilãs. Mas a 
                                verdade é que elas <span className="font-semibold">são essenciais para sua saúde</span>, desde a 
                                produção de hormônios até a absorção de vitaminas importantes.
                            </p>
                            <ul className="max-[420px]:text-base text-xl">
                                <li className="list-disc ml-4"><span className="font-semibold">Boas (insaturadas):</span> azeite, abacate, castanhas, peixes (protegem o coração, reduzem inflamações).</li>
                                <li className="list-disc ml-4"><span className="font-semibold">Saturadas (moderação):</span> carnes gordas, laticínios integrais.</li>
                                <li className="list-disc ml-4"><span className="font-semibold">Trans (evite!):</span> biscoitos industrializados, fast food, margarinas.</li>
                            </ul>
                            <p className="w-full px-4 py-2 max-[420px]:text-base text-xl bg-[#A7A7A7] italic border-l-4 border-[#121224]">
                                💡 Informação de impacto: As gorduras são o nutriente mais calórico — <span className="font-semibold">9 kcal por grama</span>, mas também o mais eficiente como reserva de energia.
                            </p>
                        </div>
                        
                        {/* ÁGUA */}
                        <div className="flex flex-col gap-4 justify-center max-[420px]:mb-4">
                            <h2 className="w-full h-auto text-2xl md:text-[28px] font-semibold">Água</h2>
                            <h3 className="w-full h-auto text-xl md:text-2xl font-semibold">💧 Água: o macronutriente invisível</h3>
                            <p className="w-full h-auto max-[420px]:text-lg text-xl">
                                Muita gente esquece, mas a água é fundamental para todos os processos do corpo. Sem ela, nenhum nutriente seria transportado, nenhuma célula funcionaria bem e sua saúde entraria em colapso.
                            </p>
                            <ul className="max-[420px]:text-base text-xl">
                                <li className="list-disc ml-4">Transporta nutrientes e oxigênio</li>
                                <li className="list-disc ml-4">Regula a temperatura corporal</li>
                                <li className="list-disc ml-4">Elimina toxinas (urina e suor)</li>
                                <li className="list-disc ml-4">Lubrifica articulações</li>
                            </ul>
                            <p className="w-full px-4 py-2 max-[420px]:text-base text-xl bg-[#A7A7A7] italic border-l-4 border-[#121224]">
                                💡 Curiosidade: Cerca de <span className="font-semibold">60% do seu corpo é água.</span><br/> Recomendação: 35 ml por quilo de peso por dia (ajustando para clima e atividade física).
                            </p>
                        </div>

                        {/* CONCLUSÃO */}
                        <div className="flex flex-col gap-4 justify-center max-[420px]:mb-4">
                            <h2 className="w-full h-auto max-[420px]:text-xl text-2xl md:text-[28px] font-semibold">Equilíbrio é a chave</h2>
                            <p className="w-full h-auto max-[420px]:text-lg text-xl">
                                Proteínas, carboidratos, gorduras e água não são inimigos da sua saúde —
                                pelo contrário, são a base da vida. O segredo não está em cortar, mas 
                                em equilibrar cada um deles na sua rotina.<br/> Se você aprender a dar 
                                ao seu corpo a quantidade certa de cada macronutriente, terá mais 
                                energia, disposição e saúde para viver bem.
                            </p>
                            <p className="w-full h-auto max-[420px]:text-lg text-xl font-medium italic">
                                Quer aprender como calcular a quantidade ideal para o seu corpo? 
                                Continue navegando pelo site e descubra como adaptar os macronutrientes 
                                ao seu objetivo.
                            </p>
                            <a 
                                href="/micronutrientes" 
                                title="Páginas sobre Micronutrientes" 
                                className="w-fit uppercase max-[420px]:text-lg text-lg max-[420px]:my-4 my-8 md:my-0 font-medium text-[#121224] hover:font-bold underline hover:cursor-pointer 
                            ">
                                ► Veja também sobre micronutrientes
                            </a>
                        </div>
                        
                        <p className="md:w-5/5 text-center bg-[#121220] text-[#F0F0F0] rounded-lg px-2 py-1 text-base font-sans uppercase">
                            Não existe dieta ideal sem equilíbrio! Cada pessoa tem uma necessidade diferente.
                            <br/> 
                            <b className="font-bold">Consulte um nutricionista para ajustar sua alimentação.</b>
                        </p>
                        
                    </main>
            </div>
        </>
    )
}