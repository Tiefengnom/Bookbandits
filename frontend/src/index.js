import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/Usercontext';
import { BorrowContextProvider } from './context/Borrowcontext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BorrowContextProvider>
    <UserContextProvider>
    <App />
    </UserContextProvider>
    </BorrowContextProvider>
  </React.StrictMode>
);
