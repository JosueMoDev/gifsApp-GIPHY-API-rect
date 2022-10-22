
import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
export const NavBarComponent = () => {
    return (
        <Fragment>
                <nav className="bg-none mb-10 ">
                    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8"/>
                        <div className="relative flex items-center justify-between h-16 align-middle">
                        <div className="flex items-center justify-start flex-1 align-middle sm:items-stretch sm:justify-start ">
                            <div className="flex items-center flex-shrink-0 text-gray-700 font-mono">
                            <img className="block w-auto h-10 lg:hidden" src="/src/assets/logo.svg" alt="logo"/>
                            <img className="hidden w-auto h-10 lg:block" src="/src/assets/logo.svg" alt="logo"/><span className="ml-0 font-black text-5xl">GIPHY</span>
                            </div>
                            <div className="flex space-x-4 py-7">
                            <div className="hidden sm:ml-6 sm:flex space-x-5  text-gray-700 font-mono text-xl ">

                                <div className='w-max '>
                                    <a href="#" className="px-3 py-1  font-medium  hover:bg-gray-700 hover:text-gray-100" aria-current="page">Reactions</a>
                                    <p className='bg-gray-700 h-2'></p>
                                </div>
                                <div className='w-max'>
                                    <a href="#" className="px-3 py-1  font-medium  hover:bg-gray-700 hover:text-gray-100">Entretaiment</a>
                                    <p className='bg-gray-700 h-2'></p>
                                </div>
                                <div className='w-max'>
                                    <a href="#" className="px-3 py-1  font-medium  hover:bg-gray-700 hover:text-gray-100">Sports</a>
                                    <p className='bg-gray-700 h-2'></p>
                                </div>
                                <div className='w-max'>
                                    <a href="#" className="px-3 py-1  font-medium  hover:bg-gray-700 hover:text-gray-100">Stickers</a>
                                    <p className='bg-gray-700 h-2'></p>
                                </div>
                                <div className='w-max'>
                                    <a href="#" className="px-3 py-1  font-medium  hover:bg-gray-700 hover:text-gray-100">Artists</a>
                                    <p className='bg-gray-700 h-2'></p>
                                </div>
                                <div className='w-max'>
                                    <a href="#" className="px-3 py-1  font-medium  hover:bg-gray-700 hover:text-gray-100"><FontAwesomeIcon icon={faEllipsisVertical}/></a>
                                    <p className='bg-gray-700 h-2'></p>
                                </div>

                            </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center justify-end space-x-0 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
               

                            <div className="flex items-center justify-end sm:hidden">

                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-full text-gray-50 hover:bg-gray-600 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
  
                                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" aria-hidden="true">
                                <path  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                  
                                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" aria-hidden="true">
                                <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            </div>
                        </div>
                    </div>
              
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="block px-3 py-2 text-base font-medium bg-gray-600 rounded-md text-gray-50" aria-current="page">Reactions</a>

                        <a href="#" className="block px-3 py-2 text-base font-medium rounded-md text-gray-50 hover:bg-gray-600 hover:text-gray-200">Entretaiment</a>

                        <a href="#" className="block px-3 py-2 text-base font-medium rounded-md text-gray-50 hover:bg-gray-600 hover:text-gray-200">Sports</a>

                        <a href="#" className="block px-3 py-2 text-base font-medium rounded-md text-gray-50 hover:bg-gray-600 hover:text-gray-200">Stickers</a>
                        <hr/>
                        <a href="#" className="block px-3 py-2 text-base font-medium rounded-md text-gray-50 hover:bg-gray-600 hover:text-gray-200">Artists</a>

                        </div>
                 </div>
            </nav>
        </Fragment>
      
    )
}