import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bills from './Pages/Bills';
import Brand from './Pages/Brand';
import Category from './Pages/Category';
import Customer from './Pages/Customer';
import Dashboard from './Pages/Dashboard';
import Sells from './Pages/Sells';
import Staff from './Pages/Staff';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/bills' element={<Bills />} />
        <Route path='/category' element={<Category />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/sells' element={<Sells />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
