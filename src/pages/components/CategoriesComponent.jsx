import { useNavigate } from 'react-router-dom';
import { useGetCategories } from '../../hooks'

export const CategoriesComponent = () => {
  const navigate = useNavigate();
  const { categories,  startSettingSubCategory } = useGetCategories();

  return (
    <div className="bg-trasparent  capitalize py-5 ">
      <div className=" md:max-w-2xl sm:py-15  lg:max-w-7xl ">
          <h1 className='text-xl md:text-3xl text-white text-left my-5 font-black' >Categories</h1>
          <div className="grid  gap-y-1 gap-x-1 md:gap-y-4 md:gap-x-4 grid-cols-2 lg:grid-cols-3 xl:gap-x-4 pb-10">
          {categories.map( category => (
              <div key={ category.name } className="group relative">
                <div  className="min-h-36  cursor-pointer w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none h-36 ">
                    <img
                    src={category.gif}
                    alt={category.name}
                    className="h-36 w-full object-cover object-center "
                    />
                    <div className={' absolute flex top-0  z-10 w-full  h-full'}>
                        <div className="absolute flex self-center  z-20 h-10 w-full justify-center">
                        <a className='text-white text-sm md:text-xl  font-bold  uppercase'
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
  )
}

