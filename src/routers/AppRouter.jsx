import { Routes, Route, BrowserRouter } from 'react-router-dom';

import React from 'react';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>        
                <Route path="/*" element={ <DashboardRoutes />  } />
        </Routes>
    </BrowserRouter>

  )
};
