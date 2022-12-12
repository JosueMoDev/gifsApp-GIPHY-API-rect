import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { useSetUi } from '../hooks';
import { IconButton } from '@mui/material';

export const CopyToClipBoardButton = ({ itemData }) => {
    const { startCopyLink, isLinkCopid } = useSetUi();
  return (
    <div>   
        <CopyToClipboard text={`https://media.giphy.com/media/${itemData.item.id}/giphy.gif`}
            onCopy={() => (!isLinkCopid)&&startCopyLink() }>
            <IconButton>
                <FontAwesomeIcon className="text-white" fontSize={`${itemData.size}rem`} icon={ faLink }/>
            </IconButton>
        </CopyToClipboard>
    </div>
  )
}
