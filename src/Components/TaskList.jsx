import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'
import {useContext} from 'react'

function TaskList() {


const {deleteTask, tasks} = useContext(TaskContext)
  if(tasks.length == 0){
    return <h1>No hay tareas</h1>
  }
  return (
    <div className="grid grid-cols-4 gap-2"> 
    {
      tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))
    }
    </div>
  )
}

export default TaskList