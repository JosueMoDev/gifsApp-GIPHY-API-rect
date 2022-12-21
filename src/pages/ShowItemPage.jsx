import { AddToFavorite, CopyEmbedButton, ShareButton, ShareComponent } from "../components";
import { useGetItemById, useGetResposeBySearchTerm, useSetUi } from "../hooks";
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const ShowItemPage = () => {
  const { startSearching } = useGetResposeBySearchTerm();
  const { item, itemTags } = useGetItemById();
  
  const { isSharingItem, startClosingShareWindow } = useSetUi();
  
  const onButtonClick = ({ target }) => startSearching(target.value);
  
  return (
    <>
      <div className="grid md:flex justify-start w-12/12 px-2 gap-x-3 capitalize mt-5">
        {/* //* user information  */}
        <div className="w-5/12">
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
        {/* //* gif and title */}
        <div key={item.id} className="group relative w-full h-full">
          <div className="min-h-full  w-full overflow-hidden  bg-transparent  lg:aspect-none h-full">
              <p className="text-gray-400  text-sm font-mono font-semibold">{item.title}</p>
              <img       
              src={item.url}
              alt={item.title}
              className={`h-full w-full object-cover object-center  lg:h-full lg:w-full pt-2 ${(isSharingItem)?'brightness-50':''}`}
               />
              {/* //*Sharing window */}
              
            <div className={`bg-trasparent absolute flex top-0  z-10 w-full  h-full ${(isSharingItem)?'':'hidden'}`}>
                <div className="absolute top-7 flex self-start justify-between p-3 z-20 h-10 w-full border-b-2 border-b-gray-300">
                  <p className="text-white text-xl font-bold px-4 text-center self-center"> Share GIF </p>
                  <div className="self-center">
                  <IconButton onClick={ startClosingShareWindow } >
                      <CloseIcon  sx={{ color:'white', fontSize:'1.5rem', fontWeight:'900'}} />
                    </IconButton>
                  </div>
                </div>
                <div className="absolute flex self-center  z-20 h-10 w-full">
                  <ShareComponent itemData={item}/>
                </div>
              </div>
          </div>
        </div>

        {/* //* share and favorite buttons */}
        <div className="w-5/12">
          <div className='w-full mt-4 my-4'>
            <div className="flex  space-x-2 items-center">
              <AddToFavorite itemData={{ item, size: 1.8}}  />
              <p className="text-white text-sm font-semibold">Favorite</p>
            </div>
            <div className="flex  space-x-2 items-center">
              <ShareButton />
              <p className="text-white text-sm font-semibold">Share</p>
            </div>
            <div className="flex  space-x-2 items-center">
              <CopyEmbedButton itemData={item} />
              <p className="text-white text-sm font-semibold">Embed</p>
            </div>
          </div>
        </div>
      </div>
            
      {/* //* Tags Related */}
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
        {/* //* Gifs related */}
      </div>
    </>
  )
}
