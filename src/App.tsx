import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './landingPage/home'
import Test from './test/test';


function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
