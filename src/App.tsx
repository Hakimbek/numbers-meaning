import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home.tsx';
import Meaning from './pages/meaning/Meaning.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/meaning' element={<Meaning />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
