import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';
import React, { useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Offer from '../src/Image/offer/none.png';

function App() {
  // Ref to track whether the notification has been shown
  const isToastShown = useRef(false);

  useEffect(() => {
    if (!isToastShown.current) {
      // Show the toast notification only once
      toast((t) => (
        <span>
          <button className='NotiButton' onClick={() => toast.dismiss(t.id)}>
          <i class="fa-solid fa-xmark"></i>
          </button> 
          <img
            src={Offer}
            alt="Error: 0x80004005"
            style={{ width: '100%', height: '100%' }}
          />
        </span>
      ));
      isToastShown.current = true; // Mark the notification as shown
    }
  }, [],);

  return (
    <div className='main'>
      <div>
        <Toaster position="top-center" reverseOrder={false} 
        toastOptions={
          {
            duration: 10000,
          className: '',
          style: {
            background: 'transparent',
          },
        }}
 />
      </div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
