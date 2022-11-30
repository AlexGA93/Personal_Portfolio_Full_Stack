import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

import { ContextProvider } from './context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ContextProvider>
      <App />
    </ContextProvider>
  </>
)
