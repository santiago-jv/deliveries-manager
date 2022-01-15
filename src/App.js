import './App.css';

import ContextProvider  from './context/appContext';
import {ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from './routes/AppRouter';
function App() {
  return (
    <ContextProvider>
      <AppRouter></AppRouter>
      <ToastContainer position='bottom-right'></ToastContainer>
    </ContextProvider>
  );
}

export default App;
