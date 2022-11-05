import { Fragment} from 'react'
import { NoSearchRosultFound } from "./NoSearchRosultFound";
import { GifsItemList } from "./";

export const GifsItemContainer = ({ data }) => {
    const [gifs, searchTerm] = data
    
    return (
        <Fragment>
            {(!gifs)
                ? null
                : gifs.length > 0
                    ? <GifsItemList gifs={gifs} />
                    : gifs.length === 0 && searchTerm.length > 0
                        ? <NoSearchRosultFound searchTerm={searchTerm} />
                        : null
            }
        </Fragment>
  )
}