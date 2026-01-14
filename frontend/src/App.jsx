import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/User/Layout';
import Login from './pages/Auth/Login';

const App = () => {
  const token = false;

  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={token ? <Layout /> : <Login />} />
        </Routes>
    </div>
  )
}

export default App
