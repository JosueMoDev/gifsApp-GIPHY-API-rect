import React from 'react'

export const FlyOutMenu = () => {
  return (
    <>

<div class="bg-gradient-to-l from-violet-500 via-fuchsia-500 to-fuchsia-500">
<div class="flex  items-center">
          <div class="hidden lg:ml-8 lg:block lg:self-stretch">
            <div class="flex h-full space-x-10">
              <div class="flex">
                <div class="absolute inset-x-0 top-full text-lg text-white">
                  <div class="relative p-4 bg-gradient-to-l from-violet-500 via-fuchsia-500 to-fuchsia-500">
                    <div class="mx-auto max-w-7xl px-8">
                      <div class="grid grid-cols-2 gap-y-1 gap-x-20 py-8">
                        <div class="row-start-1 grid grid-cols-3 gap-y-20 gap-x-20 text-md">
                          <div>
                            <p  class="font-bold text-2xl  divide-slate-50 text-gray-50">Categories</p>
                            <div  class="border-b border-gray-50 pt-2"/>
                            <div className='row-start-1 grid grid-cols-2 gap-y-10 gap-x-20 text-md'>
                                <div>
                                    <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li class="flex">
                                            <a href="#" class="hover:text-gray-200">Tops</a>
                                        </li>
                                        
                                        <li class="flex">
                                            <a href="#" class="hover:text-gray-200">Pants</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul role="list" aria-labelledby="Clothing-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li class="flex">
                                            <a href="#" class="hover:text-gray-200">Tops</a>
                                        </li>

                                        <li class="flex">
                                            <a href="#" class="hover:text-gray-200">Holiday/Gretting</a>
                                        </li>
                                    </ul>
                                </div>                          
                     
                            </div>                        
              
                          </div>

                          <div>
                            <p  class="font-bold text-2xl  divide-slate-50 text-gray-50">Stickers</p>
                            <div  class="border-b border-gray-50 pt-2"/>
                            <ul role="list" aria-labelledby="Accessories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-200">Watches</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-200">Wallets</a>
                              </li>

                            </ul>
                          </div>

                          <div>
                            <p  class="font-bold text-2xl  divide-slate-50 text-gray-50">Favorites</p>
                            <div  class="border-b border-gray-50 pt-2"/>
                            <ul role="list" aria-labelledby="Brands-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li class="flex">
                                <a href="#" class="hover:text-gray-200">Re-Arranged</a>
                              </li>

                              <li class="flex">
                                <a href="#" class="hover:text-gray-200">Counterfeit</a>
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
