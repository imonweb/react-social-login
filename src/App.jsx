import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css';
import Post from './pages/Post';

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Post />
    </div>
  )
}

export default App
