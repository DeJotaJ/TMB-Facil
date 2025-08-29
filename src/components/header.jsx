import MenuIcon from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import { useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';

export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false)
    console.log(menuOpen)

    return(
        <>
            <div className="h-[5vh] md:h-[10vh] w-full px-4 md:px-20 flex justify-between items-center bg-[#060612] text-[#F0F0F0] md:font-semibold">
                <span className="text-lg md:text-4xl text-[#22C7D2]">
                    <a href="/" className="">
                        <img src="./LogoTMB02.png" className="max-x-12 max-h-8 md:max-w-24 md:max-h-16 text-sm" alt="Logomarca"/>
                    </a>
                </span>
                <nav className="h-max md:flex gap-4 text-sm font-semibold md:text-xl md:gap-8 hidden">
                    <span className='lg:hover:border-b-8 border-[#00A6C0] lg:h-[10vh] lg:flex lg:flex-col lg:justify-center box-border'>
                        <a href="/" className='hover:text-[#FFFFFF]'>
                            INÍCIO 
                        </a>
                    </span>
                    <span className='lg:hover:border-b-8 border-[#00A6C0] lg:h-[10vh] lg:flex lg:flex-col lg:justify-center box-border'>
                        <a href="/calculadora" className='hover:text-[#FFFFFF]'>
                            CALCULADORA
                        </a>
                    </span>
                    <span className='lg:hover:border-b-8 border-[#00A6C0] lg:h-[10vh] lg:flex lg:flex-col lg:justify-center box-border'>
                        <a href="" className='hover:text-[#FFFFFF]'>
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
                absolute z-10 top-[4.8vh] right-0 w-1/2 min-h-[100vh] bg-[#060612]
                flex flex-col gap-0 border-l-2 border-[#060606]
                transition-all duration-75
                md:hidden
                ${menuOpen ? 'translate-x-[0%]' : 'translate-x-[100%] hidden'}
            `}>
                <span className='w-full px-4 py-0.5 border-b-2 border-[#F0F0F0]/50 text-[#F0F0F0]'>
                    <a href="/">
                        INÍCIO 
                    </a>
                </span>
                <span className='w-full px-4 py-1 border-b-2 border-[#F0F0F0]/50 text-[#F0F0F0]'>
                    <a href="/calculadora">
                        CALCULADORA
                    </a>
                </span>
                <span className='w-full px-4 py-1 border-b-2 border-[#F0F0F0]/50 text-[#F0F0F0]'>
                    <a href="/macronutrientes">
                        NUTRIENTES
                    </a>
                </span>
            </nav>
            <div 
                className={`
                        absolute z-10 top-[5vh] left-0 w-1/2 min-h-[100dvh] bg-[#060612]
                        duration-75
                        md:hidden
                        ${menuOpen ? 'opacity-50' : 'opacity-0 hidden'}
                `}
                onClick={() => setMenuOpen(!menuOpen)}>

            </div>
        </>
    )
}