import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetResposeBySearchTerm } from '../hooks';

export const FlyOutMenu = () => {
  const { startCleaningSearch } = useGetResposeBySearchTerm();
  const navigate = useNavigate();
  return (
    <>

<div className="bg-gradient-to-l from-violet-500 via-fuchsia-500 to-fuchsia-500">
<div className="flex  items-center">
          <div className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-10">
              <div className="flex">
                <div className="absolute inset-x-0 top-full text-lg text-white">
                  <div className="relative p-4 bg-gradient-to-l from-violet-500 via-fuchsia-500 to-fuchsia-500">
                    <div className="mx-auto max-w-7xl px-10">
                      <div className="grid grid-cols-1 gap-y-1 gap-x-20 py-8">
                        <div className=" grid grid-cols-3  space-x-20 gap-x-20  text-md">
                          <div>
                            <a className="font-bold text-2xl cursor-pointer divide-slate-50 text-gray-50"
                                onClick={() => {  
                                  startCleaningSearch();
                                  navigate('/pages/categories')}
                              }
                            >Categories</a>
                            <div  className="border-b border-gray-50 pt-2 w-40"/>
                            <div className='row-start-1 grid grid-cols-2 text-md' >
                                <div className='row-start-2 text-md'>
                                    <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li className="flex">
                                            <a  className="hover:text-gray-200">Tops</a>
                                        </li>
                                        
                                        <li className="flex">
                                            <a  className="hover:text-gray-200">Pants</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>                        
              
                          </div>

                          <div>
                            <a className="font-bold text-2xl cursor-pointer divide-slate-50 text-gray-50"
                              
                            >
                              Stickers</a>
                            <div  className="border-b border-gray-50 pt-2 w-40"/>
                            <ul role="list" aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4 ">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-200">Watches</a>
                              </li>

                              <li className="flex">
                                <a href="#" className="hover:text-gray-200">Wallets</a>
                              </li>

                            </ul>
                          </div>

                          <div>
                            <a className="font-bold text-2xl cursor-pointer divide-slate-50 text-gray-50"
                            onClick={() => {
                              startCleaningSearch();
                              navigate('/pages/favorites')
                            }
                            }
                            >Favorites</a>
                            <div  className="border-b border-gray-50 pt-2"/>
                            <ul role="list" aria-labelledby="Brands-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-200">Re-Arranged</a>
                              </li>

                              <li className="flex">
                                <a href="#" className="hover:text-gray-200">Counterfeit</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              
</div>
    </>
  )
}
