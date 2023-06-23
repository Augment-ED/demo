import './App.css';
import { Home, Login, Register, InterestForm, Dashboard } from './pages';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />}/>
      <Route path='/interestForm' element={<InterestForm />}/>
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </>
  );
}

export default App;
