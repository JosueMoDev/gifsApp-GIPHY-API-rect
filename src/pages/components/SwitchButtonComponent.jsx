import { useGetResposeBySearchTerm } from '../../hooks'
import 'animate.css';

export const SwitchButtonComponent = () => {
    const { startSwitchingButton, isSearchingByGifs } = useGetResposeBySearchTerm();
    
    const styleRight = "min-w-28 w-24 h-8 text-sm rounded-full  font-semiboldtext-gray-50  bg-gradient-to-l from-blue-700 via-violet-600 to-indigo-700 bg-indigo-500 text-white bg-indigo-500 text-white";
    
    const styleLeft = "min-w-28 w-24 h-8 text-sm rounded-full  font-semiboldtext-gray-50  bg-gradient-to-l from-teal-700 via-cyan-600 to-emerald-700 bg-emerald-500 text-white";
    
    return (
    <>
        <div className="flex bg-transparent  w-fit  space-x-4">
            <button
                    className={isSearchingByGifs ? `${styleRight} animate__animated animate__shakeX animate__headShake` : "text-gray-500  bg-transparent "}
                value={'gifs'}
                onClick={startSwitchingButton}
            >
            GIFs                
            </button>
        
            <button
                className={isSearchingByGifs ? "text-gray-500  bg-transparent" :`${styleLeft} animate__animated animate__headShake`}
                value={'stickers'}
                onClick={startSwitchingButton}
            >
            Stickers
            </button>
        </div>
    </>
  )
}
