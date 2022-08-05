import './App.css';
import AppRoutes from './AppRoutes';
import { store } from "./store";
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
