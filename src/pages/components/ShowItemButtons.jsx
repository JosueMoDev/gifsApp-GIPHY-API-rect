
import { AddToFavorite } from '../../components'
import { CopyEmbedButton, ShareButton } from './'


export const ShowItemButtons = ({ item }) => {
  return (
    <div className="w-5/12">
        <div className='flex justify-end  md:justify-start md:grid w-full mt-2 my-4 '>
            <div className=" flex  space-x-2 items-center">
                <AddToFavorite itemData={{ item, size: 1.8}}  />
                <p className="hidden md:block text-white text-sm font-semibold">Favorite</p>
            </div>
            <div className="flex  space-x-2 items-center">
                <ShareButton />
                <p className="hidden md:block text-white  text-sm font-semibold">Share</p>
            </div>
            <div className="hidden md:flex  space-x-2 items-center">
                <CopyEmbedButton itemData={item} />
                <p className="text-white text-sm font-semibold">Embed</p>
            </div>
        </div>
  </div>
  )
}
