import { Form, Welcome, Questions } from './components'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'
function App() {
  const { student } = useAuthContext()
  return (
    <Router>
      <section className='section-center gap-y container'>
        <Welcome />
        <Routes> 
        <Route path="/" element={student ? <Questions /> : <Navigate to='/login' />} />
        <Route path="/login" element={!student ? <Form login={true}/> : <Navigate to='/' />} />
        <Route path="/signup" element={!student ? <Form /> : <Navigate to='/' />} />
        </Routes> 
      </section>
    </Router>
  );
}

export default App;
