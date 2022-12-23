
import { useGetItemById, useGetResposeBySearchTerm } from "../hooks";
import { GifSelectedComponent, GifsRelated, ShowItemButtons, UserMakerGifComponent } from "./components";

export const ShowItemPage = () => {
  const { startSearching } = useGetResposeBySearchTerm();
  const { item, itemTags } = useGetItemById();
  
  const onButtonClick = ({ target }) => startSearching(target.value);
  
  return (
    <>
      <div className="hidden  md:flex justify-start  md:w-full  gap-x-3 capitalize">
        <UserMakerGifComponent item={  item } />
        <GifSelectedComponent item={  item } />
        <ShowItemButtons item={ item } />
      </div>
      {/* //! Mobile view */}
      <div className=" grid w-12/12  gap-x-3 capitalize md:hidden ">
        <GifSelectedComponent item={  item } />
        <div className="flex justify-between">
          <UserMakerGifComponent item={  item } />
          <ShowItemButtons item={ item } />
        </div>
      </div>
            
      {/* //* Tags Related */}
      <div className="hidden md:flex justify-center">
        <div className="bg-transparent p-2  md:flex  mb-5 w-fit  truncate">
          {itemTags.map( ({name})  => (
            <div className="p-1  justify-items-center" key={name} >
                <button className=" px-4 w-min-fit h-9 text-sm rounded-full italic font-base
                      text-white hover:text-emerald-500  bg-gray-700 text-center"
                      value={name}
                      onClick={onButtonClick}
                      >
                      #{name}
                    </button>
                </div>            
              ))
            }
        </div>
      </div>
      <div className="grid justify-items-center" >
        
        {/* //* Gifs related */}
        <div className=" w-full grid justify-items-start  my-2">
          <p className=" text-white text-sm md:text-lg font-mono font-semibold w-full ">Related Gifs</p>
        </div>
        <div className="w-full xs:w-8/12 md:12/12 flex justify-center ">
          <GifsRelated/>
        </div>
      </div>
    </>
  )
}
