import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@mui/material';

export const ShareButton = () => {
    // const { startCopyLink, isLinkCopid } = useSetUi();
  return (
    <div>   
        {/* <CopyToClipboard text={`https://media.giphy.com/media/${itemData.id}/giphy.gif`}
            onCopy={() => (!isLinkCopid)&&startCopyLink() }>
        </CopyToClipboard> */}
        <IconButton>
            <FontAwesomeIcon className="text-white" fontSize={'1.5rem'} icon={ faPaperPlane }/>
        </IconButton>
    </div>
  )
}