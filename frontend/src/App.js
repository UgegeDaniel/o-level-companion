import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {  Container, ThemeProvider} from '@material-ui/core'
import {theme} from './components/styles'
import { AppHeader, Notification } from './components'
import {Question, Home, Dashboard, TestParams, Results, Review, Checkout} from './pages'
import { useAuthContext } from './hooks/useAuthContext'
function App() {
  const [notification, setNotification] = useState({show: false, msg: '', type: 'danger'})
  const [testParams, setTestParams] = useState({ subject: '', year: '', examtype: 'utme' })
  const [timer, setTimer] = useState({ hour: 0, minute: 0, second: 0 })
  const [attempts, setAttempts] = useState([])
  const [marked, setMarked] = useState({})

  const {student} = useAuthContext()
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container>
          <AppHeader />
          {notification.show 
          && 
          <Notification notification={notification} setNotification={setNotification}/>
          }
          <div className="left">
            <Routes>
              <Route exact path="/" element={student ? <Dashboard marked={marked} /> : <Navigate to='/login' />} />
              <Route exact path="/testparams" element={student ? <TestParams setTimer={setTimer} testParams={testParams} setTestParams={setTestParams}/> : <Navigate to='/login' />} />
              <Route exact path="/questions" element={student ? <Question timer={timer} setTimer={setTimer} testParams={testParams} attempts={attempts} setAttempts={setAttempts} setMarked={setMarked}/> : <Navigate to='/login' />} />
              <Route exact path="/results" element={student ? <Results attempts={attempts} marked={marked}/> : <Navigate to='/login' />} />
              <Route exact path="/checkout" element={student ? <Checkout  setNotification={setNotification}/> : <Navigate to='/login' />} />
              <Route exact path="/review" element={student ? <Review marked={marked}/> : <Navigate to='/login' />} />
              <Route exact path="/login" element={!student ? <Home login={true} setNotification={setNotification} /> : <Navigate to='/' />} />
              <Route exact path="/signup" element={!student ? <Home setNotification={setNotification} /> : <Navigate to='/' />} />
            </Routes>
          </div>
      </Container>
    </ThemeProvider>
    </Router >
  );
}

export default App;
