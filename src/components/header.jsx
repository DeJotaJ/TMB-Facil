import MenuIcon from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import { useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';

export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false)
    console.log(menuOpen)


    return(
        <>
            <div className="h-[5vh] md:h-[10vh] w-full px-4 md:px-20 flex justify-between items-center bg-[#000108] text-[#E5E5E5] md:font-semibold">
                <span className="text-lg md:text-4xl text-[#22C7D2]">
                    <a href="/" className="">
                        <img src="./LogoTMB.png" className="max-x-12 max-h-8 md:max-w-24 md:max-h-16" alt="Logomarca" loading="lazy"/>
                    </a>
                </span>
                <nav className="md:flex gap-4 text-sm font-semibold md:text-xl md:gap-8 hidden">
                    <span>
                        <a href="/">
                            INÍCIO 
                        </a>
                    </span>
                    <span>
                        <a href="/calculadora">
                            CALCULADORA
                        </a>
                    </span>
                    <span>
                        <a href="">
                            NUTRIENTES
                        </a>
                    </span>
                </nav>
                <span 
                    class="absolute right-2 md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {!menuOpen && <MenuIcon className="" />}
                    {menuOpen && <Close className="" />}

                </span>
            </div>
            <nav className={`
                absolute z-10 top-[4.8vh] right-0 w-1/2 min-h-[100vh] bg-[#0F171C]
                flex flex-col gap-0 border-l-2 border-[#09151B]
                transition-all duration-75
                md:hidden
                ${menuOpen ? 'translate-x-[0%]' : 'translate-x-[100%] hidden'}
            `}>
                <span className='w-full px-4 py-0.5 border-b-2 border-[#85D7E4]/50 text-[#85D7E4]'>
                    <a href="/">
                        INÍCIO 
                    </a>
                </span>
                <span className='w-full px-4 py-1 border-b-2 border-[#85D7E4]/50 text-[#85D7E4]'>
                    <a href="/calculadora">
                        CALCULADORA
                    </a>
                </span>
                <span className='w-full px-4 py-1 border-b-2 border-[#85D7E4]/50 text-[#85D7E4]'>
                    <a href="/macronutrientes">
                        NUTRIENTES
                    </a>
                </span>
            </nav>
            <div 
                className={`
                        absolute z-10 top-[5vh] left-0 w-1/2 min-h-[100dvh] bg-[#121212]
                        duration-75
                        md:hidden
                        ${menuOpen ? 'opacity-50' : 'opacity-0 hidden'}
                `}
                onClick={() => setMenuOpen(!menuOpen)}>

            </div>
        </>
    )
}