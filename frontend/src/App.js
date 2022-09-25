import { Form, Toast, Welcome, Questions } from './components'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()
  return (
    <Router>
      <section className='section-center gap-y container'>
        <Toast />
        <Welcome />
        <Routes> 
        <Route path="/" element={user ? <Questions /> : <Navigate to='/login' />} />
        <Route path="/login" element={!user ? <Form /> : <Navigate to='/' />} />
        <Route path="/signup" element={!user ? <Form /> : <Navigate to='/' />} />
        </Routes> 
      </section>
    </Router>
  );
}

export default App;
