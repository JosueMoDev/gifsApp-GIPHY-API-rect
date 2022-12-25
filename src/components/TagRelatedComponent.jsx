import { useGetResposeBySearchTerm } from '../hooks';
import { ButtonSwichGifsAndStickers } from './ButtonSwichGifsAndStickers';

export const TagRelatedComponent = () => {

  const { tags, searchTerm, startSearching, total_gifs, total_stickers, isSearchingByGifs } = useGetResposeBySearchTerm();
  const onButtonClick = ({ target }) => startSearching(target.value);
  return (
    <>
      <div className=' hidden lg:block'>
        <div className=' flex items-center justify-between'>    
            <div className='py-5 items-start'>       
                <h2 className="text-4xl font-bold tracking-tight text-gray-50 flex items-end capitalize ">
                    {searchTerm}
                    <p className="ml-2 mb-1 text-sm font-semibold
                    text-gray-400">
                        { isSearchingByGifs ? total_gifs +' GIFs' : total_stickers+' Stickers'}
                    </p>
                </h2>
            </div>
            <div className="bg-transparent  w-min  space-x-2 flex items-center truncate">
                {tags.map(({ name }) => (
                    <button key={name} className="min-w-fit min-h-fit px-3 h-10 text-sm rounded-full italic font-base
                        text-white hover:text-emerald-500  bg-gray-800 text-center"
                          value={name}
                        onClick={onButtonClick}
                      >
                        #{name}
                      </button>
                  ))
                }
            </div>
        </div>
        <div className='flex'>
          {
          (total_gifs || total_stickers > 0 )&&<ButtonSwichGifsAndStickers />
          }
        </div>
      </div>
     

      {/* Mobile */}
      <div className=' lg:hidden '>

        <div className='flex mt-2'>       
          <h2 className="text-xl font-bold tracking-tight text-gray-50 flex items-end capitalize ">
              {searchTerm}
              <p className="ml-2 mb-1 text-sm font-semibold
              text-gray-400">
                  { isSearchingByGifs ? total_gifs +' GIFs' : total_stickers+' Stickers'}
              </p>
          </h2>
        </div>

        <div className="flex flex-col m-auto p-auto ">
          <div className="flex overflow-x-scroll sm:overflow-x-hidden  ">
            <div className="flex flex-nowrap  sm:w-full ">
              <div className='w-full flex items-center justify-between divide-x divide-slate-500 sm:divide-none'>    
                <div className=' py-5 items-start pr-5 sm:px-2'>
                  {
                  (total_gifs || total_stickers > 0 )&&<ButtonSwichGifsAndStickers />
                  }
                </div>

                <div className="bg-transparent  w-min pl-5 sm:pl-0 space-x-2 flex items-start truncate">
                    {tags.map(({ name }) => (
                        <button key={name} className="min-w-fit min-h-fit px-3 h-10 text-sm rounded-full italic font-base
                            text-white hover:text-emerald-500  bg-gray-800 text-center"
                              value={name}
                            onClick={onButtonClick}
                          >
                            #{name}
                          </button>
                      ))
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
