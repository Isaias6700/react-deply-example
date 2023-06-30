import React from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import {useState,useEffect} from 'react'


function App() {
  return (
    <main className="bg-zinc-600 h-screen">
      <div className="container">
      <TaskForm/>
      <TaskList/>
      </div>
    </main>
    
  )
}

export default App