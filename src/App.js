import logo from './logo.svg';
import './App.css';
import Header from './components/navbar/header/header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Track from './components/pages/track/track';
import Support from './components/pages/support/support';
import Suggestion from './components/pages/suggestion/suggestion';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Header/>,
      children:[
        {
          path:"/track",
          element:<Track/>
        },
        {
          path:"/support",
          element:<Support/>
        },
        {
          path:"/suggest",
          element:<Suggestion/>
        }
      ]
    }
  ])
  return <div>
    <RouterProvider router={router}/>
  </div>
}

export default App;
