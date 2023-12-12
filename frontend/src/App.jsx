import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import StateProvider from './context/StateProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Lawyer from './components/Lawyer';
import Profile from './components/Profile'
import Document from './components/Document';

function App() {
  return (
    <>
      <Router>
        <StateProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/lawyers' element={<Lawyer />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/doc-writers' element={<Document />} />
          </Routes>
          <Footer/>
        </StateProvider>
      </Router>

    </>
  );
}

export default App;
