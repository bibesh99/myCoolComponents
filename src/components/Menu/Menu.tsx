"use client"

import React, { useState } from 'react'
import { motion} from "framer-motion";

const Menu = () => {
  
   const [isMenuOpen, setIsMenuOpen] = useState(false);
    
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

  return (
    // <div className={`fixed ${isMenuOpen ? 'flex w-full h-full justify-center items-center z-50' : 'flex w-full justify-end py-9 px-16 '}`}>
    //   <div className={`flex flex-col ${isMenuOpen ? 'h-[90vh] w-[90vw] rounded-xl' : 'rounded-full '} bg-white`}>
    //     <div className='flex w-full justify-end p-3'>
    //       <button onClick={toggleMenu} className={`flex group ${isMenuOpen ? 'w-full justify-end items-center' : 'size-10 hover:w-28 justify-center items-center duration-500 ease-in-out delay-300'} space-y-2`}>
    //         <div className='flex justify-center items-center space-x-2'>
    //           <div className='flex flex-col space-y-2'> 
    //             <div className={`h-1 w-8 bg-black transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
    //             <div className={`h-1 w-8 bg-black transform transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
    //           </div>
    //           <div className={`hidden opacity-0 group-hover:opacity-100 group-hover:flex transition-opacity duration-1000 ease-in-out delay-700`}>
    //             {isMenuOpen ? (
    //               <div></div>
    //             ) : (
    //               <div>Menu</div>
    //             )}
    //           </div>
    //         </div>
    //       </button>
    //     </div>
    //     <div className='flex flex-col'>
    //     {isMenuOpen ? (
    //               <div>

    //               </div>
    //             ) : (
    //               <div></div>
    //             )}
    //     </div>
    //   </div>
    // </div>
    <div className='fixed w-full h-full z-50 p-3'>
   <div  className={`absolute top-10 right-10 transition-all duration-500 ease-in-out ${isMenuOpen ? 'flex w-[94vw] h-[90vh] bg-white rounded-2xl' : 'group bg-white size-14 hover:w-28 rounded-full flex justify-center items-center'}`}>
        <div className={`${isMenuOpen ? 'absolute right-0 p-3' : ''}`}>
            <button onClick={toggleMenu} className=' flex justify-center items-center space-x-2'>
                <div className='flex  flex-col space-y-2'>
                    <div className={`h-1 w-6 bg-black transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                    <div className={`h-1 w-6 bg-black transform transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </div>
                <div className='group-hover:flex group-hover:opacity-100 hidden opacity-0 text-black'>
                    Menu
                </div>

            </button>
        </div>
            {isMenuOpen ? (
                <div className='flex w-full h-full'>
                    <motion.div 
                        initial={{ y: 200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 2 }}
                        className='flex flex-col h-full space-y-4 px-16 py-12 text-5xl w-1/2'>
                            <div>Web Development</div>
                            <div>Software Development</div>
                            <div>UI/UX Design</div>
                            <div>Social Media</div>
                            <div>Video Editing</div>

                    </motion.div>
                    <div className='flex flex-col w-1/2'>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ):(
                <div className='hidden'>
               
                </div>
            )}

        </div>
    </div>
  )
}





export default Menu
