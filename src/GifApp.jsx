import { CopyAlertComponent, MainInputSeach, NavBarComponent } from "./components";
import { AppRouter } from "./router/AppRouter";



export const GifApp = () => {

  return (
    <>
      <CopyAlertComponent />
      <div
        className="px-0 lg:px-24"
      >
      <NavBarComponent/>
      <MainInputSeach  />       
      <AppRouter />              
      </div>
    </>      
    
  )
}
