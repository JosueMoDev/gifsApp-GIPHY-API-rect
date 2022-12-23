import { useNavigate } from 'react-router-dom';
import { useGetCategories } from '../../hooks'

export const CategoriesComponent = () => {
  const navigate = useNavigate();
  const { categories,  startSettingSubCategory } = useGetCategories();

  return (
    <div className="bg-trasparent  capitalize py-5 ">
      <div className=" max-w-2xl sm:py-15  lg:max-w-7xl ">
          <h1 className='text-3xl text-white text-left my-5 font-black' >Categories</h1>
          <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4 pb-10">
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
  )
}

