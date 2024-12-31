import React,{useState} from 'react'
import Login from './components/Login'
import { BrowserRouter as Router,Routes,Route,Link,Navigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import Button from 'react-bootstrap/Button';

import Products from './components/Product'
import Home from './components/Home'


const App = () => {
  const [isAuthenticated,setIsAuthenticated]=useState(false)
  const handleLogin = ()=>{
    setIsAuthenticated(true)
  }
  const handleLogout =()=>{
    setIsAuthenticated(false)
  }
  return (
    <div>
      <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <img  src="Untitled.png" alt="ph" style={{ height: '40px', width: '40px',marginRight:'10px' }} />
            <h2><b>ShopEase</b></h2>
          <Nav className="ms-auto">
            <Link  className="nav-link" to ="/">Home</Link>
            <Link className="nav-link" to ="/products">Products</Link>
            {!isAuthenticated?(
            <Link className="nav-link" to ="/login"  >Login</Link>
          ):(
            <button onClick={handleLogout} className='nav-link'>Logout</button>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route  path='/products'
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Products  onLogout={handleLogout}  />
          </ProtectedRoute>
        }   
        />


        </Routes>



      </Router>
  
    </div>
  )
}
function ProtectedRoute({isAuthenticated,children}){
  return isAuthenticated?children:<Navigate to="/login" />
}
export default App