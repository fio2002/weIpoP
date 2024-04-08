import { createContext, useRef } from 'react';
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toast } from "primereact/toast";
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
  <Route path={ruta + "/login"} element={<L />} />

  </Routes>
  </main>
 </Router>
    </>
  )
}

export default App