
import './App.css';
import { Navbar } from './components/Navbar';
import { Table } from './components/Table';

import { Addcity } from './components/Addcity';
import { Country } from './components/Country';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
     <Navbar/>
     <Table/>
     <Routes>
     <Route path="/addcity" element={<Addcity/>}></Route>
     <Route path="/country" element={<Country/>}></Route>
       </Routes>
     
    </div>
  );
}

export default App;
