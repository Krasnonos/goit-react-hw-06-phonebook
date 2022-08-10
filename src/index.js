import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { App } from 'components/App';
import { store } from './redux/redux';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      <ToastContainer />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
