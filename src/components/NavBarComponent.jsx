
import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FlyOutButtonToggle } from './FlyOutButtonToggle'
export const NavBarComponent = () => {
    return (
        <Fragment>
                <nav className="bg-none  mx-5">
                    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8"/>
                        <div className="relative flex items-center justify-between h-16 align-middle">
                        <div className="flex items-center justify-start flex-1 align-middle sm:items-stretch sm:justify-start ">
                        <div className="flex items-center flex-shrink-0 text-white font-mono">
                            <img className="block w-auto sm:h-7 h-5  lg:hidden" src="/src/assets/logo.svg" alt="logo"/><span className="ml-0 font-black sm:text-3xl text-xl block lg:hidden">GIPHY</span>
                            <img className="hidden  w-auto h-8 lg:block" src="/src/assets/logo.svg" alt="logo"/><span className="ml-0 font-black text-3xl hidden lg:block">GIPHY</span>
                            </div>
                            <div className="flex space-x-4 py-7">
                            <div className="hidden md:ml-6 md:flex xl:space-x-2 lg:space-x-4 space-x-2 lg:text-sm text-gray-700 font-mono text-sm ">

                                <div className='w-max '>
                                    <a href="#" className="px-3 py-2  font-bold  text-white hover:bg-gradient-to-l  from-cyan-600 via-sky-500 to-sky-600" aria-current="page">Reactions</a>
                                    <p className='bg-gradient-to-l from-teal-300 via-blue-300 to-cyan-400 h-1'></p>
                                </div>
                                <div className='w-max'>
                                    <a href="#" className="px-3 py-2  font-bold  text-white hover:bg-gradient-to-l from-cyan-600 via-sky-500 to-sky-600">Entretaiment</a>
                                    <p className='bg-gradient-to-l from-teal-400 via-blue-400 to-cyan-500 h-1'></p>
                                </div>
                                <div className='w-max'>
                                    <a href="#" className="px-3 py-2  font-bold  text-white hover:bg-gradient-to-l from-cyan-600 via-sky-500 to-sky-600">Sports</a>
                                    <p className='bg-gradient-to-l from-teal-500 via-blue-500 to-cyan-600 h-1'></p>
                                </div>
                                <div className='w-max'>
                                    <a href="#" className="px-3 py-2  font-bold  text-white hover:bg-gradient-to-l from-cyan-600 via-sky-500 to-sky-600">Stickers</a>
                                    <p className='bg-gradient-to-l  from-teal-500 via-blue-500 to-cyan-600 h-1'></p>
                                </div>
                                <div className='w-max'>
                                    <a href="#" className="px-3 py-2  font-bold  text-white hover:bg-gradient-to-l from-cyan-600 via-sky-500 to-sky-600">Artists</a>
                                    <p className='bg-gradient-to-l from-teal-600 via-blue-600 to-cyan-700 h-1'></p>
                                </div>
                                <div className='w-max'>
                                    <FlyOutButtonToggle/>
                                </div>

                            </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center justify-end space-x-0 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
               
                            <div className="flex items-center justify-end space-x-1 md:hidden">
                                <button className="min-w-auto w-8 h-8   bg-gray-100 text-gray-700 hover:bg-gray-500 hover:text-gray-100  rounded-full transition-rotation duration-300 hover:-rotate-45 ease-in-out">
                                icon missing
                                </button>
                                

                                <button className="min-w-auto w-8 h-8  bg-gray-600 text-gray-50 hover:bg-gray-500 hover:text-gray-200  rounded-full transition-rotation duration-300 hover:-rotate-45 ease-in-out">
                                <FontAwesomeIcon icon={ faBars }/>
                                </button>
                            </div>
                        </div>
                    </div>
              
                    <div className="md:hidden bg-gray-100 shadow-md rounded-md"  id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="block px-3 py-2 text-base font-medium rounded-md text-gray-700  hover:bg-gray-600 hover:text-gray-100 focus:bg-gray-700 focus:text-gray-100" aria-current="page">Reactions</a>

                        <a href="#" className="block px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-gray-600 hover:text-gray-100  focus:bg-gray-700 focus:text-gray-100">Entretaiment</a>

                        <a href="#" className="block px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-gray-600 hover:text-gray-100  focus:bg-gray-700 focus:text-gray-100">Sports</a>

                        <a href="#" className="block px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-gray-600 hover:text-gray-100  focus:bg-gray-700 focus:text-gray-100">Stickers</a>
                        
                        <a href="#" className="block px-3 py-2 text-base font-medium rounded-md text-gray-700 hover:bg-gray-600 hover:text-gray-100  focus:bg-gray-700 focus:text-gray-100">Artists</a>
                        </div>
                 </div>
            </nav>
        </Fragment>
      
    )
}