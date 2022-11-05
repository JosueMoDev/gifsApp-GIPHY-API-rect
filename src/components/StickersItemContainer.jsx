import React, { Fragment } from 'react'
import { NoSearchRosultFound } from "./NoSearchRosultFound";
import { StickerItemList } from './';
export const StickersItemContainer = ({ stickersData }) => {
    const [stickers, searchTerm] = stickersData
    return (
        <Fragment>
        {(!stickers)
            ? null
            : stickers.length > 0
                ? <StickerItemList stickers={ stickers } />
                : stickers.length === 0 && searchTerm.length > 0
                    ? <NoSearchRosultFound searchTerm={searchTerm} />
                    : null
        }
    </Fragment>
    )
}