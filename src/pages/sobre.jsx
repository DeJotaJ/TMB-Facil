export default function Sobre(){
    return(
        <>
            <section className="relative w-full md:min-h-[80dvh] flex justify-center  bg-[#1B2C35] text-white">
                <article className="
                        w-full  text-sm  flex flex-col items-center gap-0 py-4 px-8  bg-[#002233]
                        md:w-2/3 md:text-base md:px-12 md:py-8
                ">
                    <h2 className="text-3xl font-semibold my-4">TMB Fácil: Nutrição simples para todos.</h2>
                    <section className="text-lg flex flex-col gap-4">
                        <p>
                            O TMB Fácil nasceu com a missão de tornar a informação nutricional mais acessível e descomplicada para quem 
                            deseja melhorar sua alimentação e saúde.
                        </p>
                        <p>
                            Aqui, você encontra explicações claras sobre conceitos como taxa metabólica basal (TMB), gasto energético, 
                            macronutrientes, entre outros, com uma linguagem simples e direta. Nosso objetivo é ajudar você a entender como 
                            seu corpo funciona e como pequenas mudanças nos hábitos alimentares podem fazer grande diferença. 
                        </p>
                            Sabemos que o acompanhamento com um nutricionista é essencial, mas enquanto esse momento não chega, queremos 
                            ser uma ponte: oferecendo informação de qualidade e gratuita, para que você possa tomar decisões mais 
                            conscientes no seu dia a dia.
                        <p/>
                        <i>Alimentação inteligente começa com conhecimento!</i>
                    </section>
                </article>
            </section>
        </>
    )
}