import './App.css';
import AppRoutes from './AppRoutes';
import { store } from "./store";
import { Provider } from "react-redux"
import { useEffect } from 'react';
import { API_URL } from './constants';
import axios from 'axios';

function App() {

  const {dispatch} = store

  useEffect(() => {    
    axios.get(`${API_URL}/djs`).then(rep => {
      dispatch.djs.set(rep.data)
    })
  }, [])
  return (
    <Provider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
