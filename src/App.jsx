import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <div className='main-content'>
        <Navbar />
        <MainContent />
      </div>
    </div>
  )
}

export default App