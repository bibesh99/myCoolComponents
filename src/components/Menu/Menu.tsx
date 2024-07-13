"use client"

import React, { useState } from 'react'
import { motion} from "framer-motion";
import Image from 'next/image';

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { MdWebAsset } from "react-icons/md";
import { MdAppSettingsAlt } from "react-icons/md";
import { MdColorLens } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import Link from 'next/link';

  

const Menu = () => {
  
   const [isMenuOpen, setIsMenuOpen] = useState(false);
    
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

  return (
    <div className='fixed w-full h-full   p-3'>
   <div  className={`absolute top-10 right-10 transition-all duration-500 ease-in-out ${isMenuOpen ? 'flex w-[94vw] h-[90vh] bg-neutral-100 rounded-2xl' : 'group bg-neutral-100 size-14 hover:w-28 rounded-full flex justify-center items-center'}`}>
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
                        transition={{ duration: 2 ,delay: 0.2}}
                        className='flex flex-col h-full space-y-4 px-16 py-12 text-5xl w-1/2'>
                            <button className='flex space-x-2 group items-center'>
                            <p className='opacity-0 group-hover:opacity-100 fixed transition-all duration-300 ease-in-out'>
                                <MdWebAsset />
                            </p>
                            <p className='bg-neutral-100 group-hover:translate-x-10 transition-all duration-300 ease-in-out'>
                                Web Development
                            </p>
                            </button>
                            <button className='flex space-x-2 group items-center'>
                                <p className='opacity-0 group-hover:opacity-100 fixed transition-all duration-300 ease-in-out'>
                                    <MdAppSettingsAlt/>
                                </p>
                                <p className='bg-neutral-100 group-hover:translate-x-10 transition-all duration-300 ease-in-out'>
                                    Software Development
                                </p>
                            </button>
                            <button className='flex space-x-2 group items-center'>
                                <p className='opacity-0 group-hover:opacity-100 fixed transition-all duration-300 ease-in-out'>
                                    <MdColorLens/>
                                </p>
                                <p className='bg-neutral-100 group-hover:translate-x-10 transition-all duration-300 ease-in-out'>
                                    UI/UX Design
                                </p>
                            </button>
                            <button className='flex space-x-2 group items-center'>
                            <p className='opacity-0 group-hover:opacity-100 fixed transition-all duration-300 ease-in-out'>
                                    <FaLaptop/>
                                </p>
                                <p className='bg-neutral-100 group-hover:translate-x-10 transition-all duration-300 ease-in-out'>
                                    Social Media
                                </p>
                            </button>
                            <button className='flex space-x-2 group items-center'>
                                <p className='opacity-0 group-hover:opacity-100 fixed transition-all duration-300 ease-in-out'>
                                    <FaPhotoVideo/>
                                </p>
                                <p className='bg-neutral-100 group-hover:translate-x-10 transition-all duration-300 ease-in-out'>
                                    Video Editing
                                </p>
                            </button>

                    </motion.div>
                    <div className='flex flex-col w-1/2'>
                        <motion.div 
                            initial={{ y: 300, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 2 ,delay: 0.3}}                            
                            className='px-16 py-12'>
                            <Image className='rounded-md' src="/assets/img/itachi.jpg" width={1920} height={1080} alt="itachi"/>
                        </motion.div>
                        <div>
                        <motion.div 
                            initial={{ x: 500, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 2 ,delay: 1}} 
                            className='flex h-auto w-full justify-center items-center  space-x-6 text-3xl'>
                         
                            <HoverCard>
                            <HoverCardTrigger  className='cursor-pointer rounded-full border-2 p-2 border-black hover:bg-rose-500 hover:text-white transition-all duration-300 ease-in-out delay-300 hover:scale-110 '>  
                                    <div> 
                                        <FaInstagram/>        
                                    </div>
                                </HoverCardTrigger>
                                <HoverCardContent className='text-sm bg-black text-white'>
                                     <Link href="https://www.instagram.com/bibesh_99/">@bibesh_99</Link>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                            <HoverCardTrigger  className='cursor-pointer rounded-full border-2 p-2 border-black hover:bg-rose-500 hover:text-white transition-all duration-300 ease-in-out delay-300 hover:scale-110 '>  
                                <div >
                                    <FaFacebook/>
                                </div>
                                </HoverCardTrigger>
                                <HoverCardContent className='text-sm bg-black text-white'>
                                     <Link  href="https://www.facebook.com/bibesh.gurung.10">Bibesh Gurung</Link>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                            <HoverCardTrigger  className='cursor-pointer rounded-full border-2 p-2 border-black hover:bg-rose-500 hover:text-white transition-all duration-300 ease-in-out delay-300 hover:scale-110 '>    

                                <div>
                                <FaLinkedin/>
                            </div>
                                </HoverCardTrigger>
                                <HoverCardContent className='text-sm bg-black text-white'>
                                     <Link href="https://www.linkedin.com/in/bibesh-gurung-8a513022a/">Bibesh Gurung</Link>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                            <HoverCardTrigger  className='cursor-pointer rounded-full border-2 p-2 border-black hover:bg-rose-500 hover:text-white transition-all duration-300 ease-in-out delay-300 hover:scale-110 '>  
                                <div>
                                    <FaGithub/>
                                 </div>
                                </HoverCardTrigger>
                                <HoverCardContent className='text-sm bg-black text-white'>
                                     <Link href="https://github.com/bibesh99">bibesh99</Link>
                                </HoverCardContent>
                            </HoverCard>

                    

                    </motion.div>
                        </div>
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
