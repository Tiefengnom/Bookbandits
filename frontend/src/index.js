import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/Usercontext';
import { BorrowContextProvider } from './context/Borrowcontext';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthContextProvider>
    <BorrowContextProvider>
    <UserContextProvider>
    <App />
    </UserContextProvider>
    </BorrowContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
