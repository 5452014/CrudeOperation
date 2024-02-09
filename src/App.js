import './App.css';
import Create from './Compoonents/Create';
import Read from './Compoonents/Read';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from './Compoonents/Update';
function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Routes> 
        <Route exact path='/' element={<Create />} />
         <Route exact path='/read' element={<Read />} />
         <Route exact path='/update' element={<Update />} />
     <Route />

    </Routes>
    
     </BrowserRouter>
        
        
    </div>
  );
}

export default App;
