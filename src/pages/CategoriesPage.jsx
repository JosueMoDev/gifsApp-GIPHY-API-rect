import { useNavigate } from 'react-router-dom';
import { useGetCategories } from '../hooks'
import { CategoriesComponent, SubcategoriesComponent } from './components';


export const CategoriesPage = () => {
  const navigate = useNavigate();
  const { categories,  startSettingSubCategory, subcategorySelected } = useGetCategories();
  return (
    <>
      <div className='flex w-12/12 h-96  md:my-5 md:mx-5 md:space-x-5'>
        <div className='hidden md:block pt-2 md:pt-5 w-4/12 h-48'>
          <p className='text-white text-md  my-5 font-semibold'> Categories</p>
          <ol className='text-white text-md  '>
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
        <div className='flex md:py-5 w-full h-48'>
          
          { 
            ( subcategorySelected ? <SubcategoriesComponent /> : <CategoriesComponent />)
          }
        </div>
      </div>
    </>
  )
}