import { Fragment } from 'react'
import { useGetArtistsResponse } from '../../hooks';
import Carousel from 'react-material-ui-carousel'

export const ArtistsGifs = () => {
    const { artist } = useGetArtistsResponse(); 
  return (
    <Fragment>
        <Carousel className=''>
              <div className="flex flex-cols-1 gap-y-0 gap-x-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-1 capitalize">
                  {/* I don't make use of carousel item component becase i need to change hight of images
                   TODO: try to improve the carousel to shown all images by query
                  */}
                {   
                    artist.map(({ id, title, url }) => (
                        <div key={id} className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-60">
                        <img
                        src={url}
                        alt={title}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>
                    ))
                }
            </div>
        </Carousel>
    </Fragment>
  )
}