import MenuIcon from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import { useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';

export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false)
    console.log(menuOpen)


    return(
        <>
            <div className="h-[5vh] md:h-[10vh] w-full px-4 md:px-20 flex justify-between items-center bg-[#222831] text-[#E5E5E5] md:font-semibold">
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
                    <span>
                        <a href="/calculadora">
                            CALCULADORA
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
                absolute z-10 top-[5vh] right-0 w-1/2 min-h-[100dvh] bg-[#E5E5E5]
                flex flex-col gap-0 border-l-2 border-[#C5C5C5]
                transition-all duration-75
                md:hidden
                ${menuOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'}
            `}>
                <span className='w-full px-4 py-1 border-b-2 border-[#222831]/20 text-[#222831]'>
                    <a href="/">
                        INÍCIO 
                    </a>
                </span>
                <span className='w-full px-4 py-1 border-b-2 border-[#222831]/20 text-[#222831]'>
                    <a href="/calculadora">
                        CALCULADORA
                    </a>
                
                </span>
            </nav>
            <div 
                className={`
                        absolute z-10 top-[5vh] left-0 w-1/2 min-h-[100dvh] bg-[#121212]
                        duration-75
                        md:hidden
                        ${menuOpen ? 'opacity-50' : 'opacity-0'}
                `}
                onClick={() => setMenuOpen(!menuOpen)}>

            </div>
        </>
    )
}