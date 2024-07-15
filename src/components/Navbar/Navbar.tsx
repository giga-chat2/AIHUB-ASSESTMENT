// Importing Dependencies,files and Icons
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import './index.css';

/**
 * Navbar component: This component renders the navigation bar for the website.
 * It includes navigation links/icons for Home, Tools, About, Contact, and User Account.
 * It also supports a mobile menu that can be toggled.
 * 
 * @returns {JSX.Element} The rendered Navbar component.
 */
const Navbar: React.FC = () => {

    // State to manage the visibility of the mobile menu
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    // Handler to toggle the mobile menu visibility
    const handleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <>
            {/* Main Navbar container */}
            <div className='w-[100vw] h-[10vh] flex justify-center shadow-bottom-custom'>
                {/* Logo section */}
                <div className='flex-2 h-[100%] flex justify-center items-center'>
                    <img 
                        src="ilovepdf.svg" 
                        className='w-[80%] h-[80%]' 
                        srcSet="ilovepdf.svg 600w, ilovepdf.svg 900w, ilovepdf.svg 1200w" 
                        sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, 1200px" 
                        alt="iLovePDF Logo" 
                        loading="lazy" 
                    />
                </div>
                
                {/* Navigation items for larger screens */}
                <div className='nav-item hidden flex-1 h-[100%] md:flex flex-col justify-center items-center cursor-pointer'>
                    <HomeIcon className='lg:!w-[40%] lg:!h-[40%] md:!w-[30%] md:!h-[30%] text-[#e4342c]' />
                    <p className='md:text-sm lg:text-lg'>Home</p>
                </div>
                <div className='nav-item hidden flex-1 h-[100%] md:flex flex-col justify-center items-center cursor-pointer'>
                    <BuildIcon className='lg:!w-[40%] lg:!h-[40%] md:!w-[30%] md:!h-[30%] text-[#e4342c]' />
                    <p className='md:text-sm lg:text-lg'>Tools</p>
                </div>
                <div className='nav-item hidden flex-1 h-[100%] md:flex flex-col justify-center items-center cursor-pointer'>
                    <InfoIcon className='lg:!w-[40%] lg:!h-[40%] md:!w-[30%] md:!h-[30%] text-[#e4342c]' />
                    <p className='md:text-sm lg:text-lg'>About</p>
                </div>
                <div className='nav-item hidden flex-1 h-[100%] md:flex flex-col justify-center items-center cursor-pointer'>
                    <CallIcon className='lg:!w-[40%] lg:!h-[40%] md:!w-[30%] md:!h-[30%] text-[#e4342c]' />
                    <p className='md:text-sm lg:text-lg'>Contact</p>
                </div>
                
                {/* User account icon */}
                <div className='flex-1 h-[100%] flex justify-center items-center'>
                    <AccountCircleIcon className="text-[#e4342c] !w-[80%] !h-[80%] lg:!w-[60%] lg:!h-[60%] cursor-pointer" />
                </div>
                
                {/* Mobile menu toggle icon */}
                <div className='flex-1 h-[100%] flex justify-center items-center md:hidden'>
                    <div className='w-[20%] h-[30%] rounded-2xl flex flex-col justify-center items-center mr-[5%]'>
                        <MenuIcon className="text-black w-[80%] h-[80%] cursor-pointer" onClick={handleMobileMenu} />
                    </div>
                </div>
            </div>

            {/* Mobile menu container */}
            <div className={`w-[50vw] h-[40vh] bg-white shadow-2xl absolute flex flex-col justify-start items-center right-0 z-1 rounded-bl-2xl md:hidden lg:hidden ${showMobileMenu ? 'animation-from-right' : 'hidden'}`}>
                {/* Mobile menu items */}
                <div className='w-[100%] flex-1 flex justify-start items-center'>
                    <HomeIcon className='!w-[30%] !h-[40%] text-[#e4342c] ml-[10%]' />
                    <p className='md:text-sm lg:text-lg'>Home</p>
                </div>
                <div className='w-[100%] flex-1 flex justify-start items-center'>
                    <BuildIcon className='!w-[30%] !h-[40%] text-[#e4342c] ml-[10%]' />
                    <p className='md:text-sm lg:text-lg'>Tools</p>
                </div>
                <div className='w-[100%] flex-1 flex justify-start items-center'>
                    <InfoIcon className='!w-[30%] !h-[40%] text-[#e4342c] ml-[10%]' />
                    <p className='md:text-sm lg:text-lg'>About</p>
                </div>
                <div className='w-[100%] flex-1 flex justify-start items-center rounded-bl-2xl'>
                    <CallIcon className='!w-[30%] !h-[40%] text-[#e4342c] ml-[10%]' />
                    <p className='md:text-sm lg:text-lg'>Contact</p>
                </div>
            </div>
        </>
    );
}

export default Navbar;
