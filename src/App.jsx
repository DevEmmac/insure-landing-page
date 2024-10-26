import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayOut from './MainlayOut/MainLayOut';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayOut/>}>
      <Route index element={<HomePage/>} />
      <Route path='/not-found' element={<NotFoundPage />}/>
    </Route>
  ));
  return (
  <RouterProvider router={router}/>  
  )
};

export default App;