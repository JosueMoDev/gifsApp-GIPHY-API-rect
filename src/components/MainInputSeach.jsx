
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useGetResposeBySearchTerm } from '../hooks'
import { useState } from 'react'
import { useEffect } from 'react'

export const MainInputSeach = () => {
    const { startSearching, searchTerm } = useGetResposeBySearchTerm();
    
    const [inputValue, setInputValue] = useState(searchTerm);

    useEffect(() => {
        setInputValue(searchTerm)
    }, [searchTerm])
    
    const onInputChange = ({ target }) => setInputValue(target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        const input = inputValue.trim().toLowerCase();
        if (input.length <= 1) return;
        if (searchTerm === inputValue.toLowerCase()) return;
        startSearching(input)
    }
    return (
        <>
            <div className="flex">
                <form className='w-full' onSubmit={onSubmit} >
                    <div className="relative w-auto">
                        <div className="absolute inset-y-0 right-0 outline-none rounded-md bg-gradient-to-l from-pink-500
                         via-red-400 to-red-500 flex  justify-center items-center w-12 md:w-14  pointer-events-none">
                        <FontAwesomeIcon className='text-gray-50 text-lg md:text-xl lg:text-2xl ' icon={faSearch}/>
                        </div>      
                        <input
                            type="text"
                            className="
                            rounded-md border bg-gray-100
                            placeholder-gray-500 placeholder
                            border-gray-400 px-3 py-3 text-gray-900
                            focus:z-10 focus:outline-none text-xs md:text-xl 
                                block w-full md:pl-5 p-2.5 
                            "
                            placeholder="Search all the GIFs and Stickers"
                            value={inputValue}
                            onChange={ onInputChange }
                        />
                    </div>     
                </form>
            </div>
        </>  
  )
}