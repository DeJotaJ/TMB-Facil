export default function PoliticaPrivacidade(){
    return(
        <>
            <section className="relative w-full md:min-h-[80dvh] flex justify-center  bg-[#E7E7E7] text-[#121212]">
                <article className="
                        w-full  text-sm  flex flex-col items-center gap-0 py-4 px-8  bg-[#E0E0E0] md:shadow-[0_4px_8px] md:shadow-[#a0a0a0]
                        md:w-2/3 md:text-base md:px-12 md:py-8
                ">
                    <h2 className="text-3xl font-semibold my-4">Nossa Política de Privacidade</h2>
                    <section className="">
                        <p>
                            Esta Política de Privacidade descreve como as informações dos usuários são coletadas, utilizadas e protegidas 
                            ao acessar o site <b>TMB Fácil.</b>
                        </p>
                        <br/>
                        <ol className="list-decimal flex flex-col gap-8 text-md">
                            <li>
                                <h2 className="text-lg font-semibold"> Coleta de dados </h2>
                                Não coletamos dados pessoais diretamente dos usuários. As informações geradas nas calculadoras 
                                (como peso, altura ou idade) não são armazenadas em nossos servidores.
                            </li>
                            <li>
                                <h2 className="text-lg font-semibold"> Cookies e tecnologias de rastreamento </h2>
                                Podemos usar cookies ou tecnologias semelhantes para melhorar a experiência do usuário, entender como o 
                                site está sendo utilizado e exibir anúncios relevantes através do Google AdSense.
                            </li>
                            <li>
                                <h2 className="text-lg font-semibold"> Google AdSense </h2>
                                Nosso site pode utilizar anúncios fornecidos por terceiros, como o Google AdSense. Esses provedores podem 
                                usar cookies para personalizar os anúncios exibidos com base em visitas anteriores a este ou a outros sites.
                                Você pode optar por desativar a personalização de anúncios acessando: Ads Settings.
                            </li>
                            <li>
                                <h2 className="text-lg font-semibold">
                                Segurança
                                </h2>
                                Embora não armazenemos dados pessoais, buscamos manter boas práticas de segurança para proteger a 
                                navegação dos usuários.
                            </li>
                            <li>
                                <h2 className="text-lg font-semibold"> Alterações </h2>
                                Esta política pode ser atualizada a qualquer momento. Recomendamos que você a revise periodicamente.
                            </li>
                        </ol>

                        Para dúvidas sobre esta política, entre em contato através do nosso e-mail de suporte: 

                    </section>
                </article>
            </section>
        </>
    )
}