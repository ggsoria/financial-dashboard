import React from 'react'
import './styles/App.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Dashboard } from './components/Dashboard/Dashboard'

export const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  )
}
