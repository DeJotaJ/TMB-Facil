export default function Footer(){
    return(
        <>
            <div className="min-h-[5vh] w-full px-4 py-2 flex flex-col justify-between items-center text-sm  bg-[#222831] text-[#E5E5E5] 
                            md:h-[10vh] md:px-20 md:flex-row md:justify-center md:gap-24 md:text-lg md:font-light           
            ">
                <span className="max-w-24 max-h-16 px-4 py-0.5 md:px-0 md:py-0 rounded-md md:rounded-2xl">
                    <a href="/" className="">
                        <img src="./LogoTMB.png" className="max-x-16 max-h-12 md:max-w-24 md:max-h-16" alt="Logomarca"/>
                    </a>
                </span>
                <nav className="w-1/2 md:w-2/3 flex-col"> 
                    <ul className="w-full flex justify-center flex-wrap md:gap-12 font-semibold">
                        <li className="hover:text-[#00a6c0] hover:cursor-pointer hover:underline">
                            <a href="/sobre">Sobre</a>
                        </li>
                        <li className="hover:text-[#00a6c0] hover:cursor-pointer hover:underline">
                            <a href="/politicadeprivacidade">
                                Políticas de Privacidades
                            </a>
                        </li>
                        <li className="hover:text-[#00a6c0] hover:cursor-pointer hover:underline">
                            Contato
                        </li>
                    </ul>
                    <span className="flex justify-center">
                        Desenvolvido por &nbsp; <a href="/#" className="font-bold hover:text-[#00a6c0] hover:cursor-pointer hover:underline"> Djavan</a>
                    </span>
                </nav>
            </div>
        </>
    )
}