import { React, Fragment } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export const MainInputSeach = ({ onNewSearchTerm }) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({ target }) => setInputValue(target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        const input = inputValue.trim().toLowerCase();

        if (input.length <= 1) return;

        onNewSearchTerm(input)
        setInputValue('');
    }

    return (
        <Fragment>
        <div className=" flex my-3">
            <form
            className='w-full'        
            onSubmit={onSubmit}        
            >
            <div className="relative w-auto">
                <div className="absolute inset-y-0 right-0 outline-none rounded-md bg-gray-700 flex  justify-center items-center w-14  pointer-events-none">
                <FontAwesomeIcon className='text-gray-50 text-xl' icon={faSearch}/>
				</div>      
                <input
                    type="text"
                    className="
                     rounded-md border bg-gray-100
                     placeholder-gray-500 
                     border-gray-400 px-3 py-3 text-gray-900
                     focus:z-10
                        focus:outline-none sm:text-xl 
                        block w-full  pl-10 p-2.5
                    "
                    placeholder="Search all the GIFs and Stickers"
                    value={inputValue}
                    onChange={ onInputChange }
                />
            </div>
                    
            </form>
        </div>
    </Fragment>  
  )
}