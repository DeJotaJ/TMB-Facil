export default function Footer(){
    return(
        <>
            <div className="min-h-[5vh] w-full px-4 py-2 gap-4 bottom-0 flex flex-col justify-between items-center text-sm  bg-[#222831] text-[#E5E5E5] 
                            md:h-[10vh] md:px-20 md:relative md:flex-row md:justify-center md:gap-8 md:text-lg md:font-light           
            ">
                <span className="max-w-24 max-h-16 px-4 py-0 md:px-0 md:py-0 rounded-md md:rounded-2xl">
                    <a href="/" className="">
                        <img src="./LogoTMB.png" className="max-x-16 max-h-12 md:max-w-24 md:max-h-16" alt="Logomarca"/>
                    </a>
                </span>
                <nav className="w-2/2 flex flex-col gap-4 md:w-2/3 md:flex md:flex-col md:justify-around md:gap-1 md:items-center"> 
                    <ul className="w-full flex flex-col items-center md:flex-row justify-center flex-wrap gap-1 md:gap-12 font-semibold">
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
                        Desenvolvido por&nbsp;<a href="/#" className="font-bold hover:text-[#00a6c0] hover:cursor-pointer hover:underline"> Djavan</a>
                    </span>
                </nav>
            </div>
        </>
    )
}