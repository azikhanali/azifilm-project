import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "../../pages/homePage";
import DataSeries from "../../pages/dataSeries";
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

    ]);
    return <RouterProvider router={router}/> ;
}
