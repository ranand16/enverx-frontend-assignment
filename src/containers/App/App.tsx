import React from 'react';
import AppRoutes from './AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
        <Router>
         <AppRoutes />        
        </Router>
    </div>
  );
};

export default (App);
