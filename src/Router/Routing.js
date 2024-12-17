import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Search from '../components/Search/Search'
function Routing() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Search/>} />
        </Routes>
    </Router>

    </>
  )
}

export default Routing