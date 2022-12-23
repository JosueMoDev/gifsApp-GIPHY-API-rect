import {
    TwitterShareButton, WhatsappShareButton, FacebookShareButton, FacebookIcon, WhatsappIcon, TwitterIcon,
    TelegramShareButton, TelegramIcon, FacebookMessengerShareButton, FacebookMessengerIcon, RedditShareButton, RedditIcon
} from 'react-share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/material';
import { useSetUi } from '../../hooks';

export const ShareComponent = ({ itemData }) => {
    const { startCopyLink, isLinkCopid} = useSetUi();
  return (
      <div className=' grid  sm:self-center justify-center space-y-2 w-full h-fit px-10 '>
          <div className='w-full flex justify-center space-x-2'>    
            <TwitterShareButton
                url={`https://media.giphy.com/media/${itemData.id}/giphy.gif`}
                >
                  <TwitterIcon size={40} />
            </TwitterShareButton>

            <WhatsappShareButton
                url={`https://media.giphy.com/media/${itemData.id}/giphy.gif`}
                >
                <WhatsappIcon size={40}/>
            </WhatsappShareButton>

            <FacebookShareButton
                url={`https://media.giphy.com/media/${itemData.id}/giphy.gif`}
                >
                <FacebookIcon size={40}/>
            </FacebookShareButton>
            <RedditShareButton
                url={`https://media.giphy.com/media/${itemData.id}/giphy.gif`}
                >
                <RedditIcon size={40}/>
            </RedditShareButton>

            <TelegramShareButton
                url={`https://media.giphy.com/media/${itemData.id}/giphy.gif`}
                >
                <TelegramIcon size={40}/>
            </TelegramShareButton>

            <FacebookMessengerShareButton
                url={`https://media.giphy.com/media/${itemData.id}/giphy.gif`}
                >
                <FacebookMessengerIcon size={40}/>
            </FacebookMessengerShareButton>
        </div>
        <div  className='w-full flex justify-center'>
            <CopyToClipboard text={`https://media.giphy.com/media/${itemData.id}/giphy.gif`}
                onCopy={() => (!isLinkCopid)&&startCopyLink() }>
                  <Button variant='contained' sx={{ backgroundColor: '#9333ea', "&:hover": { backgroundColor:'#9333ea'}, 'width':'100%', py:1.5}} startIcon={
                    <FontAwesomeIcon className="text-white" fontSize={'1.1rem'} icon={faLink}
                    />}
                > Copy GIF Link</Button>
            </CopyToClipboard>
        </div>
      </div>
      
  )
}
