
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
    // * hay que trabajer abrir y cerrar flyout menu aqui, hay que mostrar spinner cuando se
    // * se esta buscando y setando images, limpiar el search tearm cuando se hace click en home

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