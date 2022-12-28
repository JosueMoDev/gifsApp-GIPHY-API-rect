import { useGetCategories, useGetResposeBySearchTerm } from '../../hooks'

export const SubcategoriesComponent = () => {

  const { subcategories, subcategorySelected } = useGetCategories();
  const { startSearching } = useGetResposeBySearchTerm();
  
    return (
      <div className="bg-trasparent  capitalize py-5 ">
        <div className=" max-w-2xl sm:py-15  lg:max-w-7xl ">
          <h1 className='text-xl md:text-3xl text-white text-left my-2 md:my-5 font-black' >{ subcategorySelected }</h1>
            <div className="grid gap-y-1 gap-x-1 md:gap-y-4 md:gap-x-4 grid-cols-2 lg:grid-cols-3 xl:gap-x-4 pb-10">
            {subcategories.map( subcategory => (
                <div key={ subcategory.name } className="group relative">
                  <div  className="min-h-48  cursor-pointer w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none h-full ">
                      <img
                      src={subcategory.gif}
                      alt={subcategory.name}
                      className="h-48 w-full object-cover object-center "
                      />
                      <div className={' absolute flex top-0  z-10 w-full  h-full'}>
                          <div className="absolute flex self-center  z-20 h-10 w-full justify-center">
                          <a className='text-white text-sm md:text-xl font-bold  uppercase'
                          onClick={() => {
                              startSearching(subcategory.name)
                              
                              }
                          }
                          >{subcategory.name}</a>
                          </div>
                      </div>
                    </div>
                </div>
                 ))}
            </div>
        </div>
      </div>      
    )
}
