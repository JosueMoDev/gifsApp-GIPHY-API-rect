import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetCategories, useGetResposeBySearchTerm } from '../hooks';

export const FlyOutMenu = () => {
  const { startCleaningSearch } = useGetResposeBySearchTerm();
  const { startSettingSubCategory } = useGetCategories();
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
                    <div className="mx-10  max-w-fit px-8 ">
                      <div className="grid  gap-y-1  py-8">
                        <div className=" flex flex-cols-4 space-x-20 row-span-4  text-md">
                          <div>
                            <a className="font-bold text-2xl cursor-pointer divide-slate-50 text-gray-50"
                                onClick={() => {  
                                  startCleaningSearch();
                                  navigate('/categories')}
                                }
                            >Categories</a>
                            <div  className="border-b border-gray-50 pt-2 w-63"/>
                            <div className='flex flex-cols-2 space-x-10  text-md' >
                                <div>
                                    <ul role="list"  className="mt-6 cursor-pointer space-y-6 sm:mt-4 sm:space-y-4">
                                        <li className="flex">
                                            <a  className="hover:text-gray-200 cursor-pointer">GYPHY Studios</a>
                                        </li>
                                        
                                        <li className="flex">
                                          <a className="hover:text-gray-200 cursor-pointer"
                                            onClick={() => {  
                                              startCleaningSearch();
                                              startSettingSubCategory("animals")
                                              navigate('/categories/animal')}
                                            }
                                          >Animal</a>
                                        </li>
                                        <li className="flex">
                                            <a  className="hover:text-gray-200 cursor-pointer"
                                              onClick={() => {  
                                                startCleaningSearch();
                                                startSettingSubCategory("actions")
                                                navigate('/categories/actions')}
                                              }
                                            >Actions</a>
                                        </li>
                                        
                                        <li className="flex">
                                            <a  className="hover:text-gray-200 cursor-pointer"
                                              onClick={() => {  
                                                startCleaningSearch();
                                                startSettingSubCategory("anime")
                                                navigate('categories/anime')}
                                              }
                                            >Anime</a>
                                        </li>
                                        <li className="flex">
                                            <a  className="hover:text-gray-200 cursor-pointer"
                                              onClick={() => {  
                                                startCleaningSearch();
                                                startSettingSubCategory("cartoons & comics")
                                                navigate('/categories/cartoons')}
                                              }
                                            >Cartoons</a>
                                        </li>
                                        
                                        <li className="flex">
                                            <a  className="hover:text-gray-200 cursor-pointer "
                                              onClick={() => {  
                                                startCleaningSearch();
                                                startSettingSubCategory("emotions")
                                                navigate('/categories/emotions')}
                                              }
                                            >Emotions</a>
                                        </li>
                                    </ul>
                                </div>
                                <div >
                                    <ul role="list" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li className="flex">
                                            <a  className="hover:text-gray-200 cursor-pointer "
                                              onClick={() => {  
                                                startCleaningSearch();
                                                startSettingSubCategory("food & drink")
                                                navigate('/categories/food-drink')}
                                              }
                                            >Food/Drinks</a>
                                        </li>
                                        
                                        <li className="flex">
                                            <a  className="hover:text-gray-200 cursor-pointer "
                                              onClick={() => {  
                                                startCleaningSearch();
                                                startSettingSubCategory("gaming")
                                                navigate('/categories/gaming')}
                                              }
                                            >Gaming</a>
                                        </li>

                                        <li className="flex">
                                            <a  className="hover:text-gray-200 cursor-pointer"
                                              onClick={() => {  
                                                startCleaningSearch();
                                                startSettingSubCategory("greetings")
                                                navigate('/categories/greetings')}
                                              }
                                            >Holiday/Grettings </a>
                                        </li>
                                        <li className="flex">
                                            <a  className="hover:text-gray-200 cursor-pointer"
                                              onClick={() => {  
                                                startCleaningSearch();
                                                startSettingSubCategory("memes")
                                                navigate('/categories/memes')}
                                              }
                                            >Memes</a>
                                        </li>

                                        <li className="flex">
                                            <a  className="hover:text-gray-200">Clips</a>
                                        </li>
                                    </ul>
                                </div>                
                            </div>                        
              
                          </div>

                          <div>
                            <a className="font-bold text-2xl cursor-pointer divide-slate-50 text-gray-50"
                              
                            >
                              Stickers</a>
                            <div  className="border-b border-gray-50 pt-2 w-28"/>
                            <ul role="list"  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4 ">
                              <li className="flex">
                                <a  className="hover:text-gray-200">Originals</a>
                              </li>

                              <li className="flex">
                                <a  className="hover:text-gray-200">Trending</a>
                              </li>
                              <li className="flex">
                                <a  className="hover:text-gray-200">Reactions</a>
                              </li>

                              <li className="flex">
                                <a  className="hover:text-gray-200">Packs</a>
                              </li>

                            </ul>
                          </div>
                          <div>
                            <a className="font-bold text-2xl cursor-pointer divide-slate-50 text-gray-50"
                              
                            >
                              Apps</a>
                            <div  className="border-b border-gray-50 pt-2 w-28"/>
                            <ul role="list"  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4 ">
                              <li className="flex">
                                <a  className="hover:text-gray-200">GIPHY</a>
                              </li>

                              <li className="flex">
                                <a  className="hover:text-gray-200">GIPHY World</a>
                              </li>

                              <li className="flex">
                                <a  className="hover:text-gray-200">GIPHY Capture</a>
                              </li>

                            </ul>
                          </div>

                          <div>
                            <a className="font-bold text-2xl cursor-pointer divide-slate-50 text-gray-50"
                            >About</a>
                            <div  className="border-b border-gray-50 pt-2 w-63"/>
                            <div className='row-start-1 flex flex-cols-2 space-x-10  text-md' >
                                <div>
                                    <ul  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4 w-fit">
                                        <li className="flex">
                                            <a  className="hover:text-gray-200">Team</a>
                                        </li>
                                        
                                        <li className="flex">
                                            <a  className="hover:text-gray-200">Engneering blog</a>
                                        </li>
                                        <li className="flex">
                                            <a  className="hover:text-gray-200">GYPHY arts</a>
                                        </li>
                                        <li className="flex">
                                            <a  className="hover:text-gray-200">Studio</a>
                                        </li>
                                        
                                        <li className="flex">
                                            <a  className="hover:text-gray-200">Developers</a>
                                        </li>
                                        <li className="flex">
                                            <a  className="hover:text-gray-200">Labs</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li className="flex">
                                            <a  className="hover:text-gray-200">FAQ</a>
                                        </li>

                                        <li className="flex">
                                            <a  className="hover:text-gray-200">Support</a>
                                        </li>
                                        <li className="flex">
                                            <a  className="hover:text-gray-200">Jobs</a>
                                        </li>

                                        <li className="flex">
                                            <a  className="hover:text-gray-200">DCMA</a>
                                        </li>
                                        <li className="flex">
                                            <a  className="hover:text-gray-200">Guidelines</a>
                                        </li>

                                        <li className="flex">
                                            <a  className="hover:text-gray-200">Transparency</a>
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
        </div>
              
</div>
    </>
  )
}
