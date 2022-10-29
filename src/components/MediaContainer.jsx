import { Fragment } from 'react'
import { TrindingGifs, ArtistsGifs } from './MediaComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faBoltLightning} from '@fortawesome/free-solid-svg-icons'

export const MediaContainer = () => {
    
  return (
     <Fragment>
        {
        <div className="bg-transparent capitalize ">
          <div className='mx-5 mt-10'>
            <div className='flex items-center content-center pt-5'>
                <FontAwesomeIcon className='text-blue-600  text-2xl pr-2' icon={faArrowTrendUp} />
                <span className='text-gray-200 font-bold text-2xl'>
                  Trending
                </span>
            </div>
            <TrindingGifs/>  
          </div>
          <div className='mx-5 mt-15'>
            <div className='flex items-center content-center lg:pt-10'>
                <FontAwesomeIcon className='text-pink-600 font-bold text-2xl pr-2' icon={faBoltLightning}/>
                <span className='text-gray-200 font-bold text-2xl'>
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
