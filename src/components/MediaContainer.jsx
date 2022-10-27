import { Fragment } from 'react'
import { TrindingGifs, ArtistsGifs } from './MediaComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faBoltLightning} from '@fortawesome/free-solid-svg-icons'

export const MediaContainer = () => {
    
  return (
     <Fragment>
        {
        <div className="bg-gray-100 rounded-md shadow-lg capitalize ">
          <div className='mx-5 mt-10'>
            <div className='flex items-center content-center pt-10'>
                <FontAwesomeIcon className='text-blue-600  text-2xl pr-2' icon={faArrowTrendUp} />
                <span className='text-gray-800 font-bold text-2xl'>
                  Trending
                </span>
            </div>
            <TrindingGifs/>  
          </div>
          <div className='mx-5 mt-10'>
            <div className='flex items-center content-center pt-10'>
                <FontAwesomeIcon className='text-red-700 font-bold text-2xl pr-2' icon={faBoltLightning}/>
                <span className='text-gray-800 font-bold text-2xl'>
                  Artists
                </span>
            </div>
            <ArtistsGifs/>  
          </div>
        </div>
        
        }
     </Fragment>
  )
}
