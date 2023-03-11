import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import SearchParams from './components/SearchParams'
import Details from './pages/Details'

function App() {
  return (
    <div className="App">
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path={`/details/:id`} element={<Details />}></Route>
        <Route path={`/`} element={< SearchParams />}></Route>
      </Routes>
    </div>
  )
}

export default App
