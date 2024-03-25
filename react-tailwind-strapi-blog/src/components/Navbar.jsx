import React from 'react';
import {menu, logo, close} from '../assets';


const Navbar = () => {
    return (
        <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
         <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>

            <div className='flex items-center'>
                <img src= {logo} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]'/>
            </div>
           
            <div className='flex items-center'>
                <ul className='hidden md:flex'>
                    <li>Hem</li>
                    <li>Kontakta oss</li>
                    <li>Sociala medier</li>
                </ul>

            </div>
            
            
            <div className='hidden md:flex sm:mr-10 md:mr-10'>
                <button className='border-none bg-transparent text-black mr-4'>Logga In</button>
                <button className='px-8 py-3'>Registrera dig</button>

            </div>

         </div>

        </div>
    )
}

export default Navbar