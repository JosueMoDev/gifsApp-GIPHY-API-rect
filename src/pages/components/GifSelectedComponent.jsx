import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSetUi } from "../../hooks";
import { ShareComponent } from '../components';

export const GifSelectedComponent = ({ item }) => {
    const { isSharingItem, startClosingShareWindow } = useSetUi();
  return (
    <div key={item.id} className="group relative w-full h-full">
        <div className="min-h-full  w-full overflow-hidden  bg-transparent  lg:aspect-none h-full">
            <p className="text-gray-400 text-xs sm:text-sm font-mono font-semibold mt-2">{item.title}</p>
            <img       
            src={item.url}
            alt={item.title}
            className={`h-full w-full object-cover object-center  lg:h-full lg:w-full pt-2 ${(isSharingItem)?'brightness-50':''}`}
            />
            {/* //*Sharing window */}
            
            <div className={`bg-trasparent absolute flex top-0  z-10 w-full sm:mt-2 h-full ${(isSharingItem)?'':'hidden'}`}>
                <div className="absolute top-7 flex self-start justify-between p-3 z-20 h-10 w-full border-b-2 border-b-gray-300">
                    <p className="text-white  text-xl font-bold px-4 text-center self-center"> Share GIF </p>
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
  )
}
