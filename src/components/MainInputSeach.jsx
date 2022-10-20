import { React, Fragment } from 'react'
import { useState } from 'react'

export const MainInputSeach = ({ onNewSearchTerm }) => {
    const [inputValue, setInputValue] = useState('')
    
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
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg className="w- h-6 text-gray-900 " fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path 
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 
                            1110.89 3.476l4.817 4.817a1 1 0 01-1.414
                             1.414l-4.816-4.816A6 6 0 012 8z"
						></path>
					</svg>
				</div>      
                <input
                    type="text"
                    className="
                     rounded-lg border bg-gray-100
                     placeholder-gray-600 
                     border-gray-400 px-3 py-3 text-gray-900
                     focus:z-10 focus:border-green-900 
                        focus:outline-none sm:text-xl 
                        block w-full  pl-10 p-2.5
                    "
                    placeholder="Search"
                    value={inputValue}
                    onChange={ onInputChange }
                />
            </div>
                    
            </form>
        </div>
    </Fragment>  
  )
}
