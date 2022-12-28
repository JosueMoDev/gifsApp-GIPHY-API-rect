import { CopyAlertComponent, InputSeachComponent, NavBarComponent } from "./components";
import { AppRouter } from "./router/AppRouter";



export const GifApp = () => {

  return (
    <>
      <CopyAlertComponent />
      <div className="px-2 lg:px-5 xl:px-24 w-12/12">
        <NavBarComponent/>
        <InputSeachComponent  />       
        <AppRouter />
        
      </div>
    </>      
    
  )
}
