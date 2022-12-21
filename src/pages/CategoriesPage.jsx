import { useNavigate } from 'react-router-dom';
import { useGetCategories } from '../hooks'
import { CategoriesComponent, SubcategoriesComponent } from './';


export const CategoriesPage = () => {
  const navigate = useNavigate();
        const { categories,  startSettingSubCategory, subcategorySelected } = useGetCategories();
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
          
          { 
            ( subcategorySelected ? <SubcategoriesComponent /> : <CategoriesComponent />)
          }
        </div>
      </div>
    </>
  )
}