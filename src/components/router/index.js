import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "../../pages/homePage";
import DataSeries from "../../pages/dataSeries";
import Series from "../../pages/series";
export default function Router(){
    const router=createBrowserRouter([
        {
            path:"/",
            element:<HomePage/>,
        },
        {
            path:"/dataSeries/:id",
            element:<DataSeries/>, 
        },
        {
            path:"/series",
            element:<Series/>, 
        },

    ]);
    return <RouterProvider router={router}/> ;
}
