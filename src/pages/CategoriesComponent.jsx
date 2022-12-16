import { useNavigate } from 'react-router-dom';
import { useGetCategories } from '../hooks'

export const CategoriesComponent = () => {
  const navigate = useNavigate();
  const { categories, startSettingSubCategory } = useGetCategories();
  return (
    <>
      <div className='flex w-12/12 h-96 my-5 mx-5 space-x-5'>
        <div className=' p-5 w-4/12 h-48'>
          <p className='text-white text-md px-5 my-5 font-semibold'> Categories</p>
          <ol className='text-white text-md px-5 '>
            {
              categories.map(category => (                
                <a className='grid cursor-pointer py-1 text-white hover:text-cyan-500'
                  key={category.name}
                  onClick={() => {
                    startSettingSubCategory(category.name)
                    navigate(`${category.name}`);
                  }
                }
                >{category.name}</a>
              ))
            }
          </ol>
        </div>
        <div className=' flex py-5 w-full h-48'>
        <div className="bg-trasparent  capitalize py-5 ">
                        <div className=" max-w-2xl sm:py-15  lg:max-w-7xl ">
                          <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
                            {categories.map( category => (
                              <div key={ category.name } className="group relative mb-10">
                                <div  className="min-h-48  cursor-pointer w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none h-full ">
                                  <img
                                  src={category.gif}
                                  alt={category.name}
                                  className="h-48 w-full object-cover object-center "
                                  />
                                  <div className={' absolute flex top-0  z-10 w-full  h-full'}>
                                       <div className="absolute flex self-center  z-20 h-10 w-full justify-center">
                                      <a className='text-white text-xl font-bold hover:text-2xl uppercase'
                                        onClick={() => {
                                            startSettingSubCategory(category.name)
                                            navigate(`${category.name}`);
                                          }
                                        }
                                      >{category.name}</a>
                                      </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
            </div>      
        </div>
      </div>
    </>
  )
}
