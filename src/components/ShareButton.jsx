import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@mui/material';
import { useSetUi } from '../hooks';

export const ShareButton = () => {
  const { startSharingItem } = useSetUi();
  return (
    <div>   
        <IconButton onClick={ startSharingItem }>
            <FontAwesomeIcon className="text-white" fontSize={'1.5rem'} icon={ faPaperPlane }/>
        </IconButton>
    </div>
  )
}