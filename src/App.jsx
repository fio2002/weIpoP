import { createContext, useRef } from 'react';
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toast } from "primereact/toast";
import Login from './components/contents/Login/Login';
export const AppContext = createContext(null);

function App() {
  
const ruta = "/react-project";
const toast = useRef(null);

  return (
    <>
 <Toast ref={toast} />
 <Router>
  <main>
  <Routes>
  <Route path={ruta + "/login"} element={<Login />} />

  </Routes>
  </main>
 </Router>
    </>
  )
}

export default App