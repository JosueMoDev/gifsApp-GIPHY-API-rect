import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { useSetUi } from '../hooks';

export const CopyAlertComponent = () => {
  
  const { isLinkCopid, isAlertOpen, startShowingAlert, startClosingAlert } = useSetUi();

  useEffect(() => {
    if (isLinkCopid) {
      startShowingAlert();
      setTimeout(() => { startClosingAlert(); }, 2000);

    }
    }, [isLinkCopid])
  
  return (
  
    <Stack  sx={{ width: '100%', position: 'fixed', zIndex:10,  top:0, display:`${(isAlertOpen)?'':'none'}`}} >
      <Alert variant="filled" icon={false} style={{'backgroundColor':'#34d399', width:'100%', justifyContent:'center'}}
        
        >
        <p className='text-slate-800 font-semibold'>
          
        Link copied to clipboard!
        </p>
        </Alert>
    </Stack>

  )
}
