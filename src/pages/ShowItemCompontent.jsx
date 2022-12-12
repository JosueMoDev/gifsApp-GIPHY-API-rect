
import { Link } from "react-router-dom";
import { AddToFavorite, CopyToClipBoardButton, ShareButton } from "../components";
import { useGetItemById, useGetResposeBySearchTerm } from "../hooks";


export const ShowItemCompontent = () => {
  const { startSearching } = useGetResposeBySearchTerm();
  const { item, itemTags } = useGetItemById();
  const onButtonClick = ({ target }) => startSearching(target.value);
  return (
    <>
      <div className="flex flex-cols-1 sm:flex-cols-1 lg:flex-cols-3 justify-start w-full mx-6 gap-x-10 capitalize mt-5">
        <div className="w-fit">
          {(item.user)&&(
            <div className="flex items-center px-4 py-6 ">
              <img className="w-12 h-12  object-cover mr-2"
                src={ item?.user.avatar_url} alt="avatar"/>
                <div>
                  <div className="flex items-center justify-between">
                  <h2 className="text-md font-bold text-white -mt-1">{ item?.user.display_name }</h2>
                  </div>
                <p className="text-gray-100 text-xs">@{ item?.user.username}</p>
                </div>
            </div>
          )}
                     
          <div className="items-center px-4 py-6">
            <p className="text-white text-sm font-semibold">Source </p>
            <a className="text-sm text-white lowercase cursor-pointer"> https://www.youtube.com/watch?v=0cCvB_PHEuc</a>
          </div>
        </div>
    
        <div key={item.id} className="group relative">
          <div className="min-h-full  w-full overflow-hidden  bg-transparent  lg:aspect-none h-full">
              <p className="text-gray-400 text-sm font-mono font-semibold">{item.title}</p>
              <img       
              src={item.url}
              alt={item.title}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full pt-2"
              />
          </div>
        </div>
        <div className="w-fit">
          <div className='w-full mt-4 my-4'>
            <div className="flex  space-x-2 items-center">
              <AddToFavorite itemData={{ item:item, size:1.8}}  />
              <p className="text-white text-sm font-semibold">Favorite</p>
            </div>
            <div className="flex  space-x-2 items-center">
              <ShareButton  />
              <p className="text-white text-sm font-semibold">Share</p>
            </div>
            <div className="flex  space-x-2 items-center">
              <CopyToClipBoardButton itemData={{ item, size: 1.4}} />
              <p className="text-white text-sm font-semibold">Copy to ClipBoard</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
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
    </>
  )
}
