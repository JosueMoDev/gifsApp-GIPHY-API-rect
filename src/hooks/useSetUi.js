
import { useDispatch, useSelector } from 'react-redux';
import {  onCopyLink, onShowAlert, onCloseAlert } from '../store';

export const useSetUi = () => {

    const dispatch = useDispatch();
    const { isLinkCopid, isAlertOpen } = useSelector(state => state.ui);
    
    const startCopyLink = () => { 
        
        dispatch(onCopyLink());
    }
    const startShowingAlert = () => { 
        dispatch(onShowAlert());
    }
    const startClosingAlert = () => { 
        dispatch(onCloseAlert());
    }

    return {
        // * PROPERTIES
        isLinkCopid,
        isAlertOpen,
     
        // * METHODS
        startCopyLink,
        startShowingAlert,
        startClosingAlert

    }
  
}