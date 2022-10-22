import { Fragment, React } from 'react';
import { GifsItemList, StickersItemList } from "../components";
import { Gif,StickyNote2Rounded } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
export const GridItemList = ({ searchTerm }) => {

    return (
        <Fragment>
        {searchTerm.length>0 ? (
         <>       
         <div className="flex bg-transparent p-2 w-min  space-x-0">
            <button className="min-w-0 w-32 h-11 text-500 rounded-l-full p-2 font-semibold capitalize
             text-gray-500  bg-gray-100 ring-1 ring-gray-500
             hover:bg-gray-500  hover:text-white
             focus:bg-gray-500 focus:text-white
             ">
            <Gif sx={{ fontSize:30}} />
            gifs                
            </button>
                        
            <button className="min-w-0 w-32 h-11 text-500 rounded-r-full  p-2 font-semibold capitalize
             text-gray-500  bg-gray-100 ring-1 ring-gray-500
             hover:bg-gray-500  hover:text-white
             focus:bg-gray-500 focus:text-white
             ">
            <FontAwesomeIcon className='px-2' icon={faNoteSticky} />
            stickers
            </button>
     
          
        </div>         
        <GifsItemList
            searchTerm={searchTerm}
        /></>): null
     
        } 
        </Fragment>
        
  )
}
