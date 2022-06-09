import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from'axios'
import { Provider } from './components/context/store';
import {ToastContainer} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from'react-router-dom'
import {QueryClient, QueryClientProvider} from'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
axios.defaults.baseURL ="http://localhost:5000/todo/"


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry:false
    }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ToastContainer/>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

