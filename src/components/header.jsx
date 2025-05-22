export default function Header(){
    return(
        <div className="h-[5vh] md:h-[10vh] w-full px-4 md:px-20 flex justify-between items-center bg-[#222831] text-[#D8D7BE] md:font-semibold">
            <span className="text-lg md:text-4xl text-[#00A6C0]">
                <a href="/">
                    TMB FÁCIL
                </a>
            </span>
            <nav className="md:flex gap-4 text-sm font-semibold md:text-xl md:gap-8 hidden">
                <span>
                    <a href="/">
                        INÍCIO 
                    </a>
                </span>
                <span> CALCULADORA </span>
            </nav>
        </div>
    )
}