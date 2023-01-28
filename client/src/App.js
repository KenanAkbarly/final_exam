import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTE } from "./router/route";

const route = createBrowserRouter(ROUTE)
function App() {
  return (
   <RouterProvider router = {route}/>

  
  );
}

export default App;
